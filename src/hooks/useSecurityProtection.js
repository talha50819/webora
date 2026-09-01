import { useEffect } from 'react'

/**
 * Disables copy, cut, print, and page inspection/developer tools
 * to protect site content and intellectual property
 */
export function useSecurityProtection() {
  useEffect(() => {
    // Disable right-click context menu
    const handleContextMenu = (e) => {
      e.preventDefault()
      return false
    }

    // Disable copy
    const handleCopy = (e) => {
      e.preventDefault()
      return false
    }

    // Disable cut
    const handleCut = (e) => {
      e.preventDefault()
      return false
    }

    // Disable print and developer tools
    const handleKeyDown = (e) => {
      // Disable print: Ctrl+P or Cmd+P
      if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault()
        return false
      }

      // Disable developer tools: F12
      if (e.key === 'F12') {
        e.preventDefault()
        return false
      }

      // Disable developer tools: Ctrl+Shift+I or Cmd+Shift+I
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'I') {
        e.preventDefault()
        return false
      }

      // Disable developer tools: Ctrl+Shift+C or Cmd+Shift+C (element inspector)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'C') {
        e.preventDefault()
        return false
      }

      // Disable developer tools: Ctrl+Shift+J or Cmd+Shift+J (console)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'J') {
        e.preventDefault()
        return false
      }

      // Disable developer tools: Ctrl+Shift+K or Cmd+Shift+K (console alternate)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'K') {
        e.preventDefault()
        return false
      }

      // Disable Ctrl+U (view page source)
      if ((e.ctrlKey || e.metaKey) && e.key === 'u') {
        e.preventDefault()
        return false
      }

      // Disable Ctrl+S (save page)
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault()
        return false
      }
    }

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('copy', handleCopy)
    document.addEventListener('cut', handleCut)
    document.addEventListener('keydown', handleKeyDown)

    // Disable developer tools detection (F12)
    document.onkeydown = function (event) {
      if (event.keyCode === 123) {
        return false
      }
      if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
        return false
      }
      if (event.ctrlKey && event.shiftKey && event.keyCode === 74) {
        return false
      }
      if (event.ctrlKey && event.keyCode === 85) {
        return false
      }
    }

    // Cleanup on unmount
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('copy', handleCopy)
      document.removeEventListener('cut', handleCut)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])
}
