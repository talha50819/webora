import { services } from "@/data/services";

const MODEL = "gemini-2.5-flash";

const SYSTEM_INSTRUCTION = `You are the AI assistant embedded on the JSK Corporation website. JSK Corporation is a full-service digital agency offering: ${services
  .map((s) => s.title)
  .join(
    ", "
  )}. Answer the visitor's question thoroughly in a single well-developed paragraph (roughly 4-6 sentences), plain language, no markdown, no bullet points. Wherever genuinely relevant, explain how JSK Corporation can help with the topic and encourage the visitor to reach out via the Contact page — but do not force a pitch if the question has nothing to do with JSK Corporation's services. Never invent specific pricing, timelines, or client names.`;

export async function askGemini(question: string): Promise<string> {
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("AI assistant is not configured.");
  }

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: SYSTEM_INSTRUCTION }] },
        contents: [{ role: "user", parts: [{ text: question }] }],
        generationConfig: { maxOutputTokens: 700, temperature: 0.6 },
      }),
    }
  );

  if (!res.ok) {
    throw new Error("The AI assistant is unavailable right now.");
  }

  const data = await res.json();
  const answer: string | undefined = data?.candidates?.[0]?.content?.parts
    ?.map((p: { text?: string }) => p.text)
    .join("")
    .trim();

  if (!answer) {
    throw new Error("The AI assistant couldn't come up with an answer. Try rephrasing.");
  }

  return answer;
}
