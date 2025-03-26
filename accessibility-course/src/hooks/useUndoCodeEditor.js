import { useState } from 'react';

export function useUndoCodeEditor(initialCode) {
  const [code, setCode] = useState(initialCode);
  const [history, setHistory] = useState([]);

  const updateCode = (newCode) => {
    setHistory((prev) => [...prev, code]);
    setCode(newCode);
  };

  const undo = () => {
    if (history.length === 0) return;
    const prev = history[history.length - 1];
    setHistory((prevStack) => prevStack.slice(0, -1));
    setCode(prev);
  };

  const reset = () => {
    setCode(initialCode);
    setHistory([]);
  };

  return { code, updateCode, undo, reset, history };
}
