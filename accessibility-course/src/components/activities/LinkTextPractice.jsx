// submit is triggering restart button??

import { useState, useRef, useEffect } from "react";

const urls = [
  {
    url: "https://www.nasa.gov/moon-landing-history",
    goodExample: "History of NASA moon landings",
  },
  {
    url: "https://www.nationalgeographic.com/animals/article/blue-whale-facts",
    goodExample: "Facts about blue whales",
  },
  {
    url: "https://www.weather.gov/tornado-safety",
    goodExample: "Tornado safety tips from weather.gov",
  },
  {
    url: "https://www.cdc.gov/healthyweight/healthy_eating/index.html",
    goodExample: "Healthy eating guidelines from the CDC",
  },
  {
    url: "https://www.metmuseum.org/art/collection/search/436535",
    goodExample: "Artwork information at the Met museum",
  },
];

export default function LinkTextWritingActivity() {
  const isBrowser = typeof window !== "undefined";
  const nextButtonRef = useRef(null);

  const [state, setState] = useState({
    currentIndex: 0,
    userInput: "",
    submitted: false,
    correctCount: 0,
    results: [],
  });

  const inputRef = useRef(null);

  useEffect(() => {
    if (isBrowser) {
      const savedState = localStorage.getItem("linkTextActivityState");
      if (savedState) {
        setState(JSON.parse(savedState));
      }
    }
  }, [isBrowser]);

  useEffect(() => {
    if (isBrowser) {
      localStorage.setItem("linkTextActivityState", JSON.stringify(state));
    }
  }, [state, isBrowser]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [state.currentIndex]);

  const currentScenario = urls[state.currentIndex];

  const checkClarity = () => {
    const inputLower = state.userInput.toLowerCase();
    const exampleWords = currentScenario.goodExample
      .toLowerCase()
      .split(" ")
      .filter((word) => word.length > 3);

    const matchedWords = exampleWords.filter((word) =>
      inputLower.includes(word)
    );

    return matchedWords.length >= 2;
  };

  const handleSubmit = () => {
    if (!state.submitted) {
      const isClear = checkClarity();

      setState((prev) => ({
        ...prev,
        correctCount: prev.correctCount + (isClear ? 1 : 0),
        results: [
          ...prev.results,
          {
            url: currentScenario.url,
            userInput: prev.userInput,
            isClear,
            goodExample: currentScenario.goodExample,
          },
        ],
        submitted: true,
      }));

      setTimeout(() => {
        if (nextButtonRef.current) {
          nextButtonRef.current.focus();
        }
      }, 0);
    }
  };

  const handleNext = () => {
    if (state.currentIndex < urls.length - 1) {
      setState((prev) => ({
        ...prev,
        currentIndex: prev.currentIndex + 1,
        userInput: "",
        submitted: false,
      }));
    }
  };

  const handleRestart = () => {
    setState({
      currentIndex: 0,
      userInput: "",
      submitted: false,
      correctCount: 0,
      results: [],
    });
    if (isBrowser) {
      localStorage.removeItem("linkTextActivityState");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && state.userInput.trim()) {
      handleSubmit();
    }
  };

  const renderFeedback = () => (
    <div className="p-3 border-l-4 rounded-sm bg-lightgreen border-accent">
      <p className="font-semibold mb-1">Example of descriptive link text:</p>
      <p>"{currentScenario.goodExample}"</p>
    </div>
  );

  const renderSummary = () => (
    <div className="mt-6 p-4 border rounded bg-lightgray">
      <h3 className="text-xl font-semibold mb-2">Summary</h3>
      <p className="mb-4">
        You wrote clear link text for {state.correctCount} out of {urls.length}{" "}
        URLs.
      </p>
      <ol className="list-decimal pl-5 space-y-3">
        {state.results.map((res, idx) => (
          <li key={idx}>
            <p className="font-mono text-sm break-words">{res.url}</p>
            <p>Your link text: "{res.userInput}"</p>
            {!res.isClear && <p>Suggested example: "{res.goodExample}"</p>}
          </li>
        ))}
      </ol>
      <button
        onClick={handleRestart}
        className="mt-4 px-4 py-2 rounded text-white bg-hoverdark hover:bg-accentdark"
      >
        Restart Activity
      </button>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto p-4 font-sans text-text bg-background rounded">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-darkgray">
          Progress: {state.currentIndex + 1} / {urls.length}
        </p>
        <button
          onClick={handleRestart}
          className="mb-4 px-3 py-1 rounded text-white bg-hoverdark hover:bg-accentdark"
        >
          Restart Activity
        </button>
      </div>

      <div className="p-4 border rounded bg-lightgray">
        <fieldset>
          <legend className="font-medium mb-3">
            Write clear, descriptive link text for this URL:
          </legend>
          <p className="font-mono mb-4 bg-background p-2 rounded">
            {currentScenario.url}
          </p>

          <label htmlFor="link-text-input" className="sr-only">
            Enter descriptive link text
          </label>
          <input
            ref={inputRef}
            id="link-text-input"
            type="text"
            className={`border border-darkgray bg-white p-2 rounded w-full ${
              state.submitted
                ? "bg-gray-200 text-darkgray cursor-not-allowed"
                : ""
            }`}
            placeholder="Enter descriptive link text"
            value={state.userInput}
            disabled={state.submitted}
            onChange={(e) => setState({ ...state, userInput: e.target.value })}
            onKeyDown={handleKeyDown}
          />

          <div className="flex gap-2 mt-4">
            {!state.submitted ? (
              <button
                onClick={handleSubmit}
                disabled={!state.userInput.trim()}
                className={`px-4 py-2 rounded text-white ${
                  state.userInput.trim()
                    ? "bg-accent hover:bg-accentdark"
                    : "bg-accent opacity-50 cursor-not-allowed"
                }`}
              >
                Submit
              </button>
            ) : (
              state.currentIndex < urls.length - 1 && (
                <button
                  ref={nextButtonRef}
                  onClick={handleNext}
                  className="px-4 py-2 rounded text-white bg-hoverdark hover:bg-accentdark"
                >
                  Next Question
                </button>
              )
            )}
          </div>

          {state.submitted && state.currentIndex < urls.length && (
            <div className="mt-4 space-y-4">{renderFeedback()}</div>
          )}
        </fieldset>
      </div>

      {state.submitted &&
        state.currentIndex === urls.length - 1 &&
        renderSummary()}
    </div>
  );
}
