// ??? make it an actual article?

import { useState } from "react";

const SemanticHtmlPractice = () => {
  const structure = [
    {
      id: 1,
      label: "Site title and logo",
      correct: "header",
    },
    {
      id: 2,
      label: "Main navigation menu",
      correct: "nav",
    },
    {
      id: 3,
      label: "Main article content (e.g. a blog post)",
      correct: "article",
    },
    {
      id: 4,
      label: "Sidebar with related links",
      correct: "aside",
    },
    {
      id: 5,
      label: "Copyright and contact info",
      correct: "footer",
    },
  ];

  const tagOptions = [
    "header",
    "nav",
    "main",
    "section",
    "article",
    "aside",
    "footer",
    "div",
  ];

  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleChange = (id, value) => {
    setUserAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const handleReset = () => {
    setUserAnswers({});
    setShowResults(false);
  };

  const correctCount = Object.entries(userAnswers).filter(([id, answer]) => {
    const correct = structure.find((item) => item.id.toString() === id)?.correct;
    return answer === correct;
  }).length;

  return (
    <section className="activity mx-auto mt-8 p-4 bg-lightgray rounded-lg">
      {showResults && (
        <p className="text-lg font-semibold text-primary mb-6">
          You got {correctCount} out of {structure.length} correct.
        </p>
      )}

      {structure.map((block) => {
        const userChoice = userAnswers[block.id] || "";
        const isCorrect = userChoice === block.correct;
        const selectId = `skeleton-select-${block.id}`;

        return (
          <article key={block.id} className="mb-6">
            <label htmlFor={selectId} className="block font-semibold mb-1">
              {block.label}
            </label>

            {!showResults ? (
              <select
                id={selectId}
                value={userChoice}
                onChange={(e) => handleChange(block.id, e.target.value)}
                className="border border-gray-400 rounded px-2 py-1 w-full max-w-xs"
              >
                <option value="" disabled>
                  Select tag...
                </option>
                {tagOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <div className="p-3 rounded border bg-white">
                <p className={isCorrect ? "text-green-700" : "text-red-600"}>
                  {isCorrect
                    ? `✔ Correct: <${block.correct}>`
                    : `✘ Incorrect. You chose <${userChoice}> — should be <${block.correct}>`}
                </p>
              </div>
            )}
          </article>
        );
      })}

      <div className="mt-6">
        {!showResults ? (
          <button onClick={handleSubmit} className="start-button">
            Check Answers
          </button>
        ) : (
          <button onClick={handleReset} className="start-button">
            Restart Activity
          </button>
        )}
      </div>
    </section>
  );
};

export default SemanticHtmlPractice;