"use client";

import { useEffect } from "react";

const BLOCKED_KEY_COMBOS = [
  { key: "F12" },
  { key: "u", ctrl: true },
  { key: "s", ctrl: true },
  { key: "p", ctrl: true },
  { key: "c", ctrl: true, shift: true },
  { key: "i", ctrl: true, shift: true },
  { key: "j", ctrl: true, shift: true },
  { key: "k", ctrl: true, shift: true },
];

function isEditableTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  return (
    target.tagName === "INPUT" ||
    target.tagName === "TEXTAREA" ||
    target.isContentEditable
  );
}

export default function ContentGuard() {
  useEffect(() => {
    const onContextMenu = (e: MouseEvent) => e.preventDefault();

    const onCopyCutPaste = (e: ClipboardEvent) => {
      if (!isEditableTarget(e.target)) e.preventDefault();
    };

    const onSelectStart = (e: Event) => {
      if (!isEditableTarget(e.target)) e.preventDefault();
    };

    const onDragStart = (e: DragEvent) => e.preventDefault();

    const onKeyDown = (e: KeyboardEvent) => {
      const match = BLOCKED_KEY_COMBOS.some((combo) => {
        if (combo.key.toLowerCase() !== e.key.toLowerCase()) return false;
        if (combo.ctrl && !(e.ctrlKey || e.metaKey)) return false;
        if (combo.shift && !e.shiftKey) return false;
        return true;
      });
      if (match) e.preventDefault();
    };

    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("copy", onCopyCutPaste);
    document.addEventListener("cut", onCopyCutPaste);
    document.addEventListener("paste", onCopyCutPaste);
    document.addEventListener("selectstart", onSelectStart);
    document.addEventListener("dragstart", onDragStart);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("copy", onCopyCutPaste);
      document.removeEventListener("cut", onCopyCutPaste);
      document.removeEventListener("paste", onCopyCutPaste);
      document.removeEventListener("selectstart", onSelectStart);
      document.removeEventListener("dragstart", onDragStart);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return null;
}
