// CipherBox — real client-side cryptography via the browser's native
// Web Crypto API (SubtleCrypto). Nothing here is a simulation: encryption,
// hashing, and random generation all run for real, in the browser, and
// nothing — plaintext, passphrase, or ciphertext — is ever sent anywhere
// or persisted. Each operation is independent and stateless by design,
// same as a real security tool should be.

const ENC = new TextEncoder()
const DEC = new TextDecoder()

const MAGIC = 'CBX1:' // envelope format tag, so Decrypt can reject garbage input early
const PBKDF2_ITERATIONS = 150000
const SALT_LEN = 16
const IV_LEN = 12

function toBase64(bytes) {
  let binary = ''
  bytes.forEach((b) => {
    binary += String.fromCharCode(b)
  })
  return btoa(binary)
}

function fromBase64(b64) {
  const binary = atob(b64)
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i)
  return bytes
}

async function deriveKey(passphrase, salt) {
  const keyMaterial = await crypto.subtle.importKey('raw', ENC.encode(passphrase), 'PBKDF2', false, ['deriveKey'])
  return crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt, iterations: PBKDF2_ITERATIONS, hash: 'SHA-256' },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  )
}

/**
 * AES-256-GCM encrypt, with a fresh random salt + IV per call (PBKDF2-derived
 * key, 150k iterations). Output is a single portable string:
 * "CBX1:" + base64(salt || iv || ciphertext+authTag).
 */
export async function encryptText(plaintext, passphrase) {
  const salt = crypto.getRandomValues(new Uint8Array(SALT_LEN))
  const iv = crypto.getRandomValues(new Uint8Array(IV_LEN))
  const key = await deriveKey(passphrase, salt)
  const ciphertextBuf = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, ENC.encode(plaintext))
  const ciphertext = new Uint8Array(ciphertextBuf)

  const packed = new Uint8Array(salt.length + iv.length + ciphertext.length)
  packed.set(salt, 0)
  packed.set(iv, salt.length)
  packed.set(ciphertext, salt.length + iv.length)
  return MAGIC + toBase64(packed)
}

/**
 * Reverses encryptText. AES-GCM's authentication tag means a wrong
 * passphrase OR any tampering with the ciphertext both fail loudly here
 * instead of silently returning garbage — that's the actual security
 * property being demonstrated, not just a UI nicety.
 */
export async function decryptText(envelope, passphrase) {
  const trimmed = envelope.trim()
  if (!trimmed.startsWith(MAGIC)) {
    throw new Error('Not a CipherBox envelope — expected it to start with "CBX1:".')
  }
  let packed
  try {
    packed = fromBase64(trimmed.slice(MAGIC.length))
  } catch {
    throw new Error('Corrupted envelope — could not decode base64 payload.')
  }
  if (packed.length < SALT_LEN + IV_LEN + 1) {
    throw new Error('Corrupted envelope — payload is too short.')
  }
  const salt = packed.slice(0, SALT_LEN)
  const iv = packed.slice(SALT_LEN, SALT_LEN + IV_LEN)
  const ciphertext = packed.slice(SALT_LEN + IV_LEN)
  const key = await deriveKey(passphrase, salt)
  try {
    const plainBuf = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, ciphertext)
    return DEC.decode(plainBuf)
  } catch {
    throw new Error('Decryption failed — wrong passphrase, or the data was corrupted or tampered with.')
  }
}

/** Real SHA-2 digest via SubtleCrypto, returned as lowercase hex. */
export async function hashText(text, algo) {
  const buf = await crypto.subtle.digest(algo, ENC.encode(text))
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('')
}

const CHARSETS = {
  lower: 'abcdefghijklmnopqrstuvwxyz',
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  digits: '0123456789',
  symbols: '!@#$%^&*()-_=+[]{}<>?/~',
}

/** Cryptographically-random password via crypto.getRandomValues (not Math.random). */
export function generatePassword({ length, lower, upper, digits, symbols }) {
  let charset = ''
  if (lower) charset += CHARSETS.lower
  if (upper) charset += CHARSETS.upper
  if (digits) charset += CHARSETS.digits
  if (symbols) charset += CHARSETS.symbols
  if (!charset) charset = CHARSETS.lower

  const randomValues = crypto.getRandomValues(new Uint32Array(length))
  let out = ''
  for (let i = 0; i < length; i += 1) out += charset[randomValues[i] % charset.length]
  return out
}

/** Rough entropy-based strength estimate — character-class breadth × length. */
export function estimateStrength(password) {
  if (!password) return { bits: 0, label: 'Empty', color: 'var(--dt-fg-soft)', pct: 0 }
  let charset = 0
  if (/[a-z]/.test(password)) charset += 26
  if (/[A-Z]/.test(password)) charset += 26
  if (/[0-9]/.test(password)) charset += 10
  if (/[^a-zA-Z0-9]/.test(password)) charset += 32
  const bits = Math.round(password.length * Math.log2(Math.max(2, charset)))
  let label
  let color
  if (bits < 28) {
    label = 'Weak'
    color = '#f87171'
  } else if (bits < 45) {
    label = 'Fair'
    color = '#fbbf24'
  } else if (bits < 65) {
    label = 'Strong'
    color = '#4ade80'
  } else {
    label = 'Very strong'
    color = 'var(--dt-accent)'
  }
  return { bits, label, color, pct: Math.min(100, Math.round((bits / 90) * 100)) }
}
