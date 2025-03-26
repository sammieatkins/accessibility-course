"use client";

import { useState, useEffect, useCallback } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { useUndoCodeEditor } from "../../hooks/useUndoCodeEditor";

const initialCode = `<div role="main" aria-label="Main Content" role="region">
  <section role="region" aria-labelledby="title">
    <h1 id="title">Welcome</h1>
    <p>This section has too much ARIA.</p>
  </section>
</div>`;

const AriaPractice = () => {
  const { code, updateCode, undo, reset, history } =
    useUndoCodeEditor(initialCode);
  const [feedback, setFeedback] = useState("");
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      const isUndo =
        (e.ctrlKey || e.metaKey) &&
        e.key.toLowerCase() === "z" &&
        history.length > 0;

      if (isUndo) {
        e.preventDefault();
        undo();
      }
    },
    [history, undo]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const checkAria = () => {
    const cleaned = code.replace(/\s+/g, " ").toLowerCase();

    const tooMuchAria =
      cleaned.includes('role="region"') ||
      (cleaned.includes('role="main"') && cleaned.includes("aria-label"));

    const semanticOnly =
      cleaned.includes("<section") &&
      cleaned.includes("<h1") &&
      !cleaned.includes("role=") &&
      !cleaned.includes("aria-");

    if (tooMuchAria) {
      setFeedback("🚫 Too much ARIA! Try simplifying the roles and labels.");
    } else if (semanticOnly) {
      setFeedback(
        "✅ Nice! You’re letting semantic HTML do the heavy lifting."
      );
    } else {
      setFeedback("⚠️ Getting closer! Try removing redundant ARIA roles.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      <LiveProvider code={code} language="html">
        <LiveEditor
          onChange={updateCode}
          className="border rounded p-4 font-mono bg-gray-50 focus:outline focus:outline-2 focus:outline-green-300"
        />
        <LiveError className="text-red-600" />
        {hasMounted && (
          <LivePreview className="border p-4 bg-white rounded min-h-[100px] transition-opacity duration-200" />
        )}
      </LiveProvider>

      <div className="flex gap-4 flex-wrap">
        <button
          onClick={checkAria}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Check My Code
        </button>
        <button
          onClick={undo}
          disabled={history.length === 0}
          className={`px-4 py-2 text-white rounded ${
            history.length === 0
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-yellow-500 hover:bg-yellow-600"
          }`}
        >
          Undo
        </button>
        <button
          onClick={() => {
            reset();
            setFeedback("");
          }}
          className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
        >
          Reset Code
        </button>
      </div>

      {feedback && <p className="text-lg">{feedback}</p>}
    </div>
  );
};

export default AriaPractice;
