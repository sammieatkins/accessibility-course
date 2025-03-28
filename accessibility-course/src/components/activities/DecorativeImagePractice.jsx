// fix flickers on initial load
// make restart always visible
// button colors and other css
// fill out content for image data (10-15?)

"use client";
import { useState, useEffect } from "react";
import { imageData } from "../../utils/imageData";

const TOTAL_REQUIRED_CORRECT = 5;

const LOCAL_STORAGE_KEY = "decorative-image-progress";

const DecorativeImagePractice = () => {
  const [usedContextIds, setUsedContextIds] = useState(new Set());
  const [current, setCurrent] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [wasCorrect, setWasCorrect] = useState(null);
  const [hasRestarted, setHasRestarted] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);

  // Load saved progress on first render
  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      setCorrectCount(parsed.correctCount || 0);
      setCurrent(parsed.current || null);
      setShowExplanation(parsed.showExplanation || false);
      setWasCorrect(parsed.wasCorrect ?? null);
      setUsedContextIds(new Set(parsed.usedContextIds || []));
    } else {
      getNextImageScenario();
    }
    setHasInitialized(true);
  }, []);

  // Save progress when state changes
  useEffect(() => {
    if (!hasInitialized) return;
    const toSave = {
      correctCount,
      current,
      showExplanation,
      wasCorrect,
      usedContextIds: Array.from(usedContextIds),
    };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(toSave));
  }, [
    usedContextIds,
    correctCount,
    current,
    showExplanation,
    wasCorrect,
    hasInitialized,
  ]);

  const getNextImageScenario = () => {
    const available = [];

    for (const image of imageData) {
      image.contexts.forEach((scenario, index) => {
        const id = `${image.id}_${index}`;
        if (!usedContextIds.has(id)) {
          available.push({ imageId: image.id, contextIndex: index });
        }
      });
    }

    if (available.length === 0) {
      setCurrent(null);
      return;
    }

    const next = available[Math.floor(Math.random() * available.length)];
    setCurrent(next);
    setShowExplanation(false);
    setWasCorrect(null);
  };

  const handleAnswer = (selectedDecorative) => {
    if (!current) return;

    const { imageId, contextIndex } = current;
    const image = imageData.find((img) => img.id === imageId);
    const scenario = image?.contexts[contextIndex];

    if (!image || !scenario) return;

    const isCorrect = selectedDecorative === scenario.isDecorative;
    setWasCorrect(isCorrect);
    setShowExplanation(true);

    const newUsed = new Set(usedContextIds);
    newUsed.add(`${imageId}_${contextIndex}`);
    setUsedContextIds(newUsed);

    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    getNextImageScenario();
  };

  const restartActivity = () => {
    setUsedContextIds(new Set());
    setCorrectCount(0);
    setCurrent(null);
    setShowExplanation(false);
    setWasCorrect(null);
    setHasRestarted(true);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  useEffect(() => {
    if (hasRestarted) {
      getNextImageScenario();
      setHasRestarted(false);
    }
  }, [hasRestarted]);

  // Wait until initial state has loaded to avoid flicker
  if (!hasInitialized) return null;

  if (correctCount >= TOTAL_REQUIRED_CORRECT) {
    return (
      <div className="p-4 text-center">
        <h2 className="text-2xl font-semibold mb-4">All done!</h2>
        <p className="text-lg">You got 5 correct answers. Great job!</p>
        <button
          className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={restartActivity}
        >
          Restart Activity
        </button>
      </div>
    );
  }

  if (!current) {
    if (usedContextIds.size > 0 || showExplanation || wasCorrect !== null) {
      return (
        <div className="p-4 text-center">
          <h2 className="text-xl font-semibold mb-2">
            You're out of scenarios!
          </h2>
          <p className="mb-4">You completed all available image contexts.</p>
          <p className="mb-4">
            You got {correctCount} correct out of {usedContextIds.size} (
            {Math.round((correctCount / usedContextIds.size) * 100)}%).
          </p>
          {correctCount < TOTAL_REQUIRED_CORRECT ? (
            <p className="mb-4">Try again to reach 5 correct answers!</p>
          ) : (
            <p className="mb-4">Awesome work!</p>
          )}
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={restartActivity}
          >
            Restart Activity
          </button>
        </div>
      );
    }

    return <p className="p-4">Loading...</p>;
  }

  const image = imageData.find((img) => img.id === current.imageId);
  const scenario = image?.contexts[current.contextIndex];

  if (!image || !scenario) return <p>Error loading activity.</p>;

  return (
    <div className="p-4 max-w-xl mx-auto relative">
      <div className="mb-4 text-sm text-gray-600">
        Progress: {correctCount} / {TOTAL_REQUIRED_CORRECT} correct
      </div>

      <img
        src={image.src}
        alt={image.alt}
        className="w-full rounded-md shadow mb-4"
      />

      <div className="mb-4">{scenario.context}</div>

      {!showExplanation && (
        <div className="flex gap-4 mb-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => handleAnswer(true)}
          >
            Decorative
          </button>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            onClick={() => handleAnswer(false)}
          >
            Meaningful
          </button>
        </div>
      )}

      {showExplanation && (
        <div className="mb-4">
          <div className="mt-2 mb-4 p-3 rounded border bg-gray-50">
            <p
              className={`font-semibold ${
                wasCorrect ? "text-green-700" : "text-red-700"
              }`}
            >
              {wasCorrect ? "You got it right!" : "That wasn't correct."}
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800">Why?</h3>
            <p className="mt-1 text-gray-700">{scenario.explanation}</p>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Alt Text for This Context
            </h3>
            <p className="mt-1 font-mono bg-gray-100 rounded p-2 text-sm">
              {scenario.altForContext}
            </p>
          </div>

          <div className="mt-4">
            <button
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Always-visible restart button */}
      <div className="fixed bottom-4 right-4">
        <button
          className="bg-gray-300 text-gray-800 text-sm px-3 py-1 rounded hover:bg-gray-400"
          onClick={restartActivity}
        >
          Restart Activity
        </button>
      </div>
    </div>
  );
};

export default DecorativeImagePractice;
