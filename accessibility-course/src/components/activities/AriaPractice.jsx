// add an example that has actually necessary aria
// uhhhhh keyboard trap on the code editor

"use client";

import { useState, useEffect } from "react";

const AriaPractice = () => {
  const defaultCode = `<nav role="navigation" aria-label="Main Navigation">
  <ul>
    <li><a href="#about">About</a></li>
    <li><a href="#services">Services</a></li>
  </ul>
</nav>

<main role="main" aria-label="Main Content">
  <section role="region" aria-labelledby="welcome-heading">
    <h1 id="welcome-heading">Welcome to Our Site</h1>
    <p>This section introduces our services and mission.</p>
    <button role="button" onclick="alert('Hello')">Click Me</button>
  </section>
</main>`;

  const LOCAL_KEY = "aria-practice-code";
  const [code, setCode] = useState(defaultCode);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [hintLevel, setHintLevel] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      setCode(parsed.code || defaultCode);
      setSubmitted(parsed.submitted || false);
      setHintLevel(parsed.hintLevel || 0);
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      LOCAL_KEY,
      JSON.stringify({ code, submitted, hintLevel })
    );
  }, [code, submitted, hintLevel]);

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
      setFeedback("Too much ARIA! Try simplifying the roles and labels.");
    } else if (semanticOnly) {
      setFeedback(
        "Nice work. You’re letting semantic HTML do the heavy lifting."
      );
    } else {
      setFeedback("Getting closer. Try removing redundant ARIA roles.");
    }

    setSubmitted(true);
  };

  const handleRestart = () => {
    setCode(defaultCode);
    setFeedback("");
    setSubmitted(false);
    setHintLevel(0);
    localStorage.removeItem(LOCAL_KEY);
  };

  const styledPreview = `
    <style>
      .preview-wrapper {
        font-family: sans-serif;
        line-height: 1.6;
        background-color: #f8fafc;
        padding: 2rem;
      }

      .preview-wrapper main,
      .preview-wrapper section {
        background: white;
        padding: 2rem;
        border-radius: 0.5rem;
        box-shadow: 0 0 4px rgba(0,0,0,0.1);
        margin-bottom: 2rem;
      }
    </style>

    <div class="preview-wrapper">
      ${code}
    </div>
  `;

  const hints = [
    "ARIA should be used when native HTML isn't sufficient.",
    'Try removing unnecessary role="region" or aria-label.',
    "Use semantic elements like <main> and <section> instead of adding ARIA for structure.",
  ];

  return (
    <div className="max-w-2xl mx-auto p-4 font-sans text-text bg-background rounded space-y-2">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-darkgray">ARIA Practice</p>
        <button
          onClick={handleRestart}
          className="text-sm px-3 py-1 rounded text-white bg-hoverdark hover:bg-accentdark"
        >
          Restart Activity
        </button>
      </div>

      <div className="p-4 border rounded bg-lightgray">

        <textarea
          className="w-full h-80 p-3 border border-darkgray rounded font-mono text-sm bg-white"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <div className="flex flex-wrap gap-4">
          <button
            onClick={checkAria}
            className="px-4 py-2 rounded text-white bg-accent hover:bg-accentdark"
          >
            Submit
          </button>
          {hintLevel < hints.length && (
            <button
              onClick={() => setHintLevel((h) => h + 1)}
              className="text-accent underline"
            >
              Show a hint
            </button>
          )}
        </div>

        {hintLevel > 0 && (
          <div className="mt-2 p-3 bg-lightgreen border-l-4 border-hoverdark rounded text-sm space-y-2">
            {hints.slice(0, hintLevel).map((hint, index) => (
              <p key={index}>{hint}</p>
            ))}
          </div>
        )}

        {submitted && (
          <div className="mt-2 p-3 bg-lightgray border-l-4 border-darkgray text-sm">
            {feedback}
          </div>
        )}
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Live Preview</h3>
        {loaded && (
          <div
            className="border p-4 rounded bg-white min-h-[22rem]"
            dangerouslySetInnerHTML={{ __html: styledPreview }}
          />
        )}
      </div>
    </div>
  );
};

export default AriaPractice;
