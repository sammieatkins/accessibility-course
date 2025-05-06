// the summary page might have to be adjusted once i add all the image data.

"use client";
import { useState, useLayoutEffect, useEffect } from "react";
import { imageData } from "../../utils/imageData";

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

  if (!hasInitialized) return <div className="activity-container" />;

  const image = current
    ? imageData.find((img) => img.id === current.imageId)
    : null;
  const scenario = image?.contexts[current?.contextIndex];

  return (
    <div className="activity-container">
      <div className="activity-header">
        <p className="activity-progress">
          Progress: {correctCount} / {usedContextIds.size}
        </p>
        <button className="button-accent" onClick={restartActivity}>
          Restart Activity
        </button>
      </div>

      {!current && usedContextIds.size > 0 ? (
        <div className="activity-box">
          <h2 className="activity-title">You're out of scenarios!</h2>
          <p>
            You got {correctCount} out of {usedContextIds.size} correct (
            {Math.round((correctCount / usedContextIds.size) * 100)}%)
          </p>
          <button className="button-accent" onClick={restartActivity}>
            Restart Activity
          </button>
        </div>
      ) : !current ? (
        <p>Loading...</p>
      ) : (
        <div className="activity-box">
          <img src={image.src} alt={image.alt} className="activity-image" />
          <p className="activity-context">{scenario.context}</p>

          {!showExplanation ? (
            <div className="button-row">
              <button
                className="button-accent"
                onClick={() => handleAnswer(true)}
              >
                Decorative
              </button>
              <button
                className="button-accent"
                onClick={() => handleAnswer(false)}
              >
                Meaningful
              </button>
            </div>
          ) : (
            <div className="explanation-block">
              <div
                className={`feedback-message ${
                  wasCorrect ? "feedback-correct" : "feedback-incorrect"
                }`}
              >
                <p className="feedback-label">
                  {wasCorrect ? "You got it right!" : "That wasn't correct."}
                </p>
              </div>

              <div>
                <h3>Why?</h3>
                <p>{scenario.explanation}</p>
              </div>

              <div>
                <h3>Alt Text for This Context</h3>
                <p className="alt-text-block">alt="{scenario.altForContext}"</p>
              </div>

              <button className="button-accent" onClick={handleNext}>
                Next
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
