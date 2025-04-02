// put the sections side by side on a big screen and stacked on small screens
// increase the default text area height to fit the content (and expand based on the content inside as it's typed?)
// add some checks to not allow <script> tags to protect the site
// fix the wonkiness of the skip nav button. it's being goofy at the moment
// focus in the preview css should be a differnt color on the preview nav (probably white). curently doesn't match contrast. Then switch to the navy blue in the body
// override all of my site's styles in the css so that it really looks like a different page.
// light gray "skip link practice", probably get rid of it. it'd be nice to have something there for continuity, but it doesn't really fit? idk, maybe it's fine.
// MISSING FORM LABEL FIX THAT => <p>Edit the code below to add a working skip link to the page.</p>

"use client";
import { useState, useEffect } from "react";

const LOCAL_KEY = "skip-link-activity";

const SkipNavPractice = () => {
  const defaultCode = `<header>
  <h1>Practice Site</h1>
  <!-- Try adding a skip link (with a class of "skip-link") -->
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
    </ul>
  </nav>
</header>

<main id="preview-main">
  <a id="preview-main-focus" href="#">Main Content Start</a>
  <h2>Welcome to our site</h2>
  <p>This is the main content of the page.</p>
</main>`;

  const [code, setCode] = useState(defaultCode);
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState("");
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

  const handleSubmit = () => {
    const hasLink = code.includes('href="#preview-main"');
    const hasTarget =
      code.includes('id="preview-main"') || code.includes("id='preview-main'");
    const hasSkipText = code.toLowerCase().includes("skip");

    if (hasLink && hasTarget && hasSkipText) {
      setFeedback(
        "Great job! Your skip link is working. Press Tab to test it in the preview below."
      );
    } else if (hasLink && !hasTarget) {
      setFeedback(
        "You're close! You have a skip link, but there's no matching element with id='preview-main'."
      );
    } else if (!hasLink && hasTarget) {
      setFeedback(
        "Almost there — you have a target, but you need a link that points to it."
      );
    } else {
      setFeedback(
        "Keep going! Try adding a link that skips to the main content."
      );
    }

    setSubmitted(true);
  };

  const handleRestart = () => {
    setCode(defaultCode);
    setSubmitted(false);
    setFeedback("");
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

      .preview-wrapper nav {
        background: #1e293b;
        padding: 1rem;
        margin-bottom: 2rem;
      }

      .preview-wrapper nav ul {
        display: flex;
        gap: 1rem;
        list-style: none;
        margin: 0;
        padding: 0;
      }

      .preview-wrapper nav a {
        color: white;
        text-decoration: none;
      }

      .preview-wrapper main {
        background: white;
        padding: 2rem;
        border-radius: 0.5rem;
        box-shadow: 0 0 4px rgba(0,0,0,0.1);
      }

      .preview-wrapper .skip-link {
        position: absolute;
        left: -10000px;
        top: auto;
        width: 1px;
        height: 1px;
        overflow: hidden;
        background: #1e293b;
        color: #fff;
        padding: 0.5rem 1rem;
        z-index: 100;
      }

      .preview-wrapper .skip-link:focus {
        position: static;
        width: auto;
        height: auto;
        margin-bottom: 1rem;
        display: inline-block;
      }

      .preview-wrapper #preview-main-focus {
        display: inline-block;
        font-weight: bold;
        margin-bottom: 1rem;
      }
    </style>

    <div class="preview-wrapper">
      ${code}
    </div>
  `;

  const hints = [
    "Skip links are anchor tags that let users jump directly to main content.",
    'Try adding: <a href="#preview-main" class="skip-link">Skip to main content</a>',
    'Make sure your <main> has id="preview-main".',
  ];

  return (
    <div className="max-w-2xl mx-auto p-4 font-sans text-text bg-background rounded space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-darkgray">
          Skip Link Practice
        </p>
        <button
          onClick={handleRestart}
          className="text-sm px-3 py-1 rounded text-white bg-hoverdark hover:bg-accentdark"
        >
          Restart Activity
        </button>
      </div>

      <div className="p-4 border rounded bg-lightgray space-y-4">
        <p>Edit the code below to add a working skip link to the page.</p>

        <textarea
          className="w-full h-80 p-3 border border-darkgray rounded font-mono text-sm bg-white"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <div className="flex flex-wrap gap-4">
          <button
            onClick={handleSubmit}
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
          <div className="mt-2 p-3 bg-lightgreen border-l-4 border-accent text-sm space-y-2">
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

export default SkipNavPractice;
