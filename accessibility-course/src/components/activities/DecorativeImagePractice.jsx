// fix flickers on initial load
// put restart button on top right of the block, opposite the progress thing
// button colors and other css
// fill out content for image data (10-15?)
"use client";
import { useState, useLayoutEffect, useEffect } from "react";
import { imageData } from "../../utils/imageData";

const TOTAL_REQUIRED_CORRECT = 5;
const LOCAL_STORAGE_KEY = "decorative-image-progress";

export default function DecorativeImagePractice() {
  const [usedContextIds, setUsedContextIds] = useState(new Set());
  const [current, setCurrent] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [wasCorrect, setWasCorrect] = useState(null);
  const [hasRestarted, setHasRestarted] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);

  useLayoutEffect(() => {
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

  if (!hasInitialized) return <div className="min-h-screen bg-background" />;

  const image = current
    ? imageData.find((img) => img.id === current.imageId)
    : null;
  const scenario = image?.contexts[current?.contextIndex];

  return (
    <div className="max-w-2xl mx-auto p-4 font-sans text-text bg-background rounded">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-darkgray">
          Progress: {correctCount} / {TOTAL_REQUIRED_CORRECT}
        </p>
        <button
          onClick={restartActivity}
          className="mb-4 px-3 py-1 rounded text-white bg-hoverdark hover:bg-accentdark"
        >
          Restart Activity
        </button>
      </div>

      {!current && usedContextIds.size > 0 ? (
        <div className="p-4 border rounded bg-lightgray text-center">
          <h2 className="text-xl font-semibold mb-2">
            You're out of scenarios!
          </h2>
          <p className="mb-4">
            You got {correctCount} out of {usedContextIds.size} correct (
            {Math.round((correctCount / usedContextIds.size) * 100)}%)
          </p>
          {correctCount < TOTAL_REQUIRED_CORRECT ? (
            <p className="mb-4">Try again to reach 5 correct answers!</p>
          ) : (
            <p className="mb-4">Awesome work!</p>
          )}
          <button
            onClick={restartActivity}
            className="mt-4 px-4 py-2 rounded text-white bg-hoverdark hover:bg-accentdark"
          >
            Restart Activity
          </button>
        </div>
      ) : !current ? (
        <p className="p-4">Loading...</p>
      ) : (
        <div className="p-4 border rounded bg-lightgray">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full rounded mb-4 shadow"
          />
          <p className="mb-4">{scenario.context}</p>

          {!showExplanation ? (
            <div className="flex gap-4">
              <button
                className="px-4 py-2 rounded text-white bg-accent hover:bg-accentdark"
                onClick={() => handleAnswer(true)}
              >
                Decorative
              </button>
              <button
                className="px-4 py-2 rounded text-white bg-accent hover:bg-accentdark"
                onClick={() => handleAnswer(false)}
              >
                Meaningful
              </button>
            </div>
          ) : (
            <div className="mt-4 space-y-4">
              <div
                className={`p-3 border-l-4 rounded-sm ${
                  wasCorrect
                    ? "bg-lightgreen border-primary"
                    : "bg-red-100 border-red-600"
                }`}
              >
                <p className="font-semibold mb-1">
                  {wasCorrect ? "You got it right!" : "That wasn't correct."}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-text">Why?</h3>
                <p className="text-sm text-darkergray">
                  {scenario.explanation}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-text">
                  Alt Text for This Context
                </h3>
                <p className="font-mono bg-white text-sm rounded p-2 mt-1 border">
                  {scenario.altForContext}
                </p>
              </div>

              <button
                className="px-4 py-2 rounded text-white bg-accent hover:bg-accentdark"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
