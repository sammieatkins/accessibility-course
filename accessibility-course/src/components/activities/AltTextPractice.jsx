"use client";
import { useState, useLayoutEffect, useEffect } from "react";

const TOTAL_REQUIRED_CORRECT = 5;

const images = [
  {
    src: "/images/pug.png",
    question: "A social media post about a lazy Sunday with a pet.",
    exampleAnswer: "A pug lying on a cozy blanket, looking sleepy.",
    keywords: ["pug", "blanket", "sleepy", "cozy"],
    explanation:
      "The image shows a pug resting on a soft, cozy blanket, looking relaxed.",
  },
  {
    src: "/images/animals_graph.png",
    question: "An educational slide showing animal population trends.",
    exampleAnswer:
      "A bar graph comparing population sizes of different animals.",
    keywords: ["bar graph", "population", "animals", "trends"],
    explanation:
      "This image is a chart showing the population sizes of various animals over time.",
  },
];

export default function AltTextPractice() {
  const [userAltText, setUserAltText] = useState("");
  const [imageIndex, setImageIndex] = useState(0);
  const [feedbackVisible, setFeedbackVisible] = useState(false);
  const [userThinksCorrect, setUserThinksCorrect] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [hasFinished, setHasFinished] = useState(false);

  useLayoutEffect(() => {
    const savedState = localStorage.getItem("altTextActivityState");
    if (savedState) {
      const parsedState = JSON.parse(savedState);
      setImageIndex(parsedState.imageIndex || 0);
      setUserAltText(parsedState.userAltText || "");
      setFeedbackVisible(parsedState.feedbackVisible || false);
      setUserThinksCorrect(parsedState.userThinksCorrect || null);
      setCorrectCount(parsedState.correctCount || 0);
      setHasFinished(parsedState.hasFinished || false);
    }
  }, []);

  useEffect(() => {
    const stateToSave = {
      imageIndex,
      userAltText,
      feedbackVisible,
      userThinksCorrect,
      correctCount,
      hasFinished,
    };
    localStorage.setItem("altTextActivityState", JSON.stringify(stateToSave));
  }, [
    imageIndex,
    userAltText,
    feedbackVisible,
    userThinksCorrect,
    correctCount,
    hasFinished,
  ]);

  const handleSubmit = () => {
    if (userAltText.trim() === "") return;
    setFeedbackVisible(true);
  };

  const handleNext = () => {
    if (imageIndex + 1 < images.length) {
      setImageIndex((prevIndex) => prevIndex + 1);
      setUserAltText("");
      setFeedbackVisible(false);
      setUserThinksCorrect(null);
    } else {
      setHasFinished(true);
    }
  };

  const handleRestart = () => {
    setImageIndex(0);
    setUserAltText("");
    setFeedbackVisible(false);
    setUserThinksCorrect(null);
    setCorrectCount(0);
    setHasFinished(false);
    localStorage.removeItem("altTextActivityState");
  };

  const getMissingKeywords = (user, keywords) => {
    const userWords = user.toLowerCase().split(/\W+/);
    return keywords.filter((word) => !userWords.includes(word));
  };

  const renderFeedback = () => {
    const missingWords = getMissingKeywords(
      userAltText,
      images[imageIndex].keywords
    );

    return (
      <div className="mt-4 space-y-4">
        {/* 1. Side-by-side section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
          {/* Example Alt Text */}
          <div className="bg-lightgreen border-l-4 border-primary p-4 rounded-md shadow-sm h-full pt-0">
            <h3 className="text-lg font-bold text-text mb-2">
              Example Alt Text
            </h3>
            <p>{images[imageIndex].exampleAnswer}</p>
          </div>

          {/* Your Alt Text */}
          <div className="bg-lightgray border-l-4 border-darkergray rounded-md shadow-sm h-full flex flex-col overflow-hidden">
            {/* Top section with user alt text */}
            <div className="p-4 pt-0">
              <h3 className="text-lg font-bold text-text mb-2">
                Your Alt Text
              </h3>
              <p className="mb-3">{userAltText}</p>
            </div>

            {/* Bottom section with full-width dark background and pills */}
            <div className="bg-darkergray px-4 py-3 text-white space-y-2">
              <p className="text-sm font-semibold text-white">Missing Keywords:</p>
              <div className="flex flex-wrap gap-2">
                {missingWords.map((word) => (
                  <span
                    key={word}
                    className="text-sm px-3 py-1 rounded-full bg-darkgray text-white"
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 2. Explanation */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            Why the example alt text works
          </h3>
          <p className="text-gray-700">{images[imageIndex].explanation}</p>
        </div>

        {/* 3. Yes / No */}
        <div className="flex gap-2 mt-2 mb-2 flex-wrap">
          <button
            onClick={() => {
              if (userThinksCorrect !== true) {
                setCorrectCount((prev) => prev + 1);
              }
              setUserThinksCorrect(true);
            }}
            className={`px-4 py-2 rounded font-semibold ${
              userThinksCorrect === true
                ? "bg-accent text-white"
                : "bg-lightgray text-text hover:bg-hoverdark hover:text-white"
            }`}
          >
            Yes, mine is good
          </button>
          <button
            onClick={() => {
              if (userThinksCorrect === true) {
                setCorrectCount((prev) => prev - 1);
              }
              setUserThinksCorrect(false);
            }}
            className={`px-4 py-2 rounded font-semibold ${
              userThinksCorrect === false
                ? "bg-accent text-white"
                : "bg-lightgray text-text hover:bg-hoverdark hover:text-white"
            }`}
          >
            No, mine needs work
          </button>
        </div>
      </div>
    );
  };

  const renderSummary = () => (
    <div className="p-4 border rounded bg-lightgray">
      <h3 className="text-xl font-semibold mb-2">Summary</h3>
      <p>
        You marked {correctCount} out of {images.length} as correct.
      </p>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto p-4 font-sans text-text bg-background rounded">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-darkgray">
          Progress: {correctCount} / {TOTAL_REQUIRED_CORRECT}
        </p>
        <button
          onClick={handleRestart}
          className="mb-4 px-3 py-1 rounded text-white bg-hoverdark hover:bg-accentdark"
        >
          Restart Activity
        </button>
      </div>

      {hasFinished ? (
        renderSummary()
      ) : (
        <>
          <img
            src={images[imageIndex].src}
            alt=""
            className="w-full rounded-md shadow mb-4"
          />

          <div className="mb-4">{images[imageIndex].question}</div>

          {!feedbackVisible ? (
            <>
              <label htmlFor="alt-text-input" className="sr-only">
                Alt text input
              </label>
              <textarea
                id="alt-text-input"
                rows="3"
                placeholder="Write your alt text here..."
                className="w-full p-2 border border-darkgray rounded bg-white mb-4"
                value={userAltText}
                onChange={(e) => setUserAltText(e.target.value)}
              />
              <button
                onClick={handleSubmit}
                disabled={!userAltText.trim()}
                className={`px-4 py-2 rounded text-white ${
                  userAltText.trim()
                    ? "bg-accent hover:bg-accentdark"
                    : "bg-accent opacity-50 cursor-not-allowed"
                }`}
              >
                Submit
              </button>
            </>
          ) : (
            <>
              {renderFeedback()}
              <button
                onClick={handleNext}
                className="mt-6 px-4 py-2 rounded text-white bg-accent hover:bg-accentdark"
              >
                Next
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
}
