import { useState, useRef } from "react";

const HeadingLevelsPractice = () => {
  const articleData = [
    {
      id: 1,
      text: "The Science of Sleep",
      paragraph:
        "Sleep is one of the most essential yet mysterious biological functions. Every human needs it, yet for centuries we've struggled to understand why. Advances in neuroscience and medicine have begun to uncover just how critical sleep is to nearly every aspect of health and wellbeing.",
      correct: "h1",
      feedback:
        "This is the title of the entire article. It introduces the topic and stands alone at the highest level of the content hierarchy, making H1 the correct choice.",
    },
    {
      id: 2,
      text: "Why Do We Sleep?",
      paragraphs: [
        "Scientists have proposed several theories to explain why we sleep, and many are likely to be true at once.",
        "Sleep appears to play a major role in energy conservation, physical healing, brain development, and emotional processing. It's not just a passive state of rest — it's an active period where the body and brain carry out vital work.",
      ],
      correct: "h2",
      feedback:
        "This heading introduces a major section under the article title. It's not a subpoint of another heading, so H2 is the appropriate level.",
    },
    {
      id: 3,
      text: "Physical Restoration",
      paragraph:
        "During deep stages of sleep, the body releases growth hormone, rebuilds tissue, and strengthens the immune system. Muscles repair and energy is replenished. These processes are particularly important for children, athletes, and anyone recovering from illness or injury.",
      correct: "h3",
      feedback:
        "This heading is a subtopic within the 'Why Do We Sleep?' section. Since it falls under that H2, it should be an H3.",
    },
    {
      id: 4,
      text: "Brain Processing",
      paragraphs: [
        "Sleep plays a huge role in learning and memory. REM sleep in particular helps solidify new information and manage emotional experiences.",
        "Without adequate REM sleep, people struggle with focus, problem-solving, and emotional regulation.",
      ],
      correct: "h3",
      feedback:
        "Like the previous section, this is another subtopic under 'Why Do We Sleep?'. It is on the same level as 'Physical Restoration', so H3 is correct.",
    },
    {
      id: 5,
      text: "How Sleep Works",
      paragraph:
        "Sleep is not a uniform state — it's composed of several repeating cycles that alternate between non-REM and REM stages. Non-REM includes light sleep and deep slow-wave sleep, while REM sleep involves vivid dreaming and brain activity patterns closer to wakefulness. A full sleep cycle takes about 90 minutes and repeats 4–6 times per night.",
      correct: "h2",
      feedback:
        "This introduces a new, distinct section of the article parallel to 'Why Do We Sleep?'. It belongs at the H2 level.",
    },
    {
      id: 6,
      text: "Sleep and Health",
      paragraphs: [
        "Modern research shows strong links between sleep and both physical and mental health.",
        "Poor sleep increases the risk of conditions like heart disease, diabetes, and obesity. It also affects mood, increasing the likelihood of anxiety and depression.",
        "Prioritizing sleep is one of the most powerful steps a person can take to protect their overall wellbeing.",
      ],
      correct: "h2",
      feedback:
        "This is another major section that stands alongside the previous H2s. It's not a subtopic of any earlier section, so H2 is appropriate.",
    },
  ];

  const headingOptions = ["p", "h1", "h2", "h3", "h4", "h5", "h6"];
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [liveMessage, setLiveMessage] = useState("");
  const firstInputRef = useRef(null);
  const topRef = useRef(null);

  const handleChange = (id, value, text) => {
    setUserAnswers((prev) => ({ ...prev, [id]: value }));
    const label =
      value === "p" ? "paragraph" : `heading level ${value.slice(1)}`;
    setLiveMessage(`Set to ${label} for: ${text}`);
  };

  const handleSubmit = () => {
    setShowResults(true);
    setTimeout(() => {
      topRef.current?.scrollIntoView({ behavior: "smooth" });
      topRef.current?.focus();
    }, 0);
  };

  const resetActivity = () => {
    setUserAnswers({});
    setShowResults(false);
    setLiveMessage("");
    setTimeout(() => {
      firstInputRef.current?.focus();
    }, 0);
  };

  const correctCount = Object.entries(userAnswers).filter(([id, answer]) => {
    const correct = articleData.find(
      (item) => item.id.toString() === id
    )?.correct;
    return answer === correct;
  }).length;

  return (
    <section className="activity mx-auto mt-8 p-4 bg-lightgray rounded-lg">
      <section
        ref={topRef}
        tabIndex="-1"
        className="outline-none focus:outline-none"
      >
        <h2 className="text-2xl font-bold mb-4">
          Choose the Correct Heading Level for Each Section
        </h2>

        {showResults && (
          <p className="text-lg font-semibold text-primary mb-6">
            You got {correctCount} out of {articleData.length} correct.
          </p>
        )}
      </section>

      <aside className="sr-only" aria-live="polite">
        {liveMessage}
      </aside>

      {articleData.map((block) => {
        const userChoice = userAnswers[block.id] || "p";
        const Tag = userChoice;
        const isCorrect = userChoice === block.correct;
        const selectId = `heading-select-${block.id}`;
        const labelText = `Select heading level for: ${block.text}`;

        return (
          <article key={block.id} className="mb-10">
            <label htmlFor={selectId} className="sr-only">
              {labelText}
            </label>

            <section className="mb-2">
              {!showResults ? (
                <select
                  ref={block.id === 1 ? firstInputRef : null}
                  id={selectId}
                  value={userChoice}
                  onChange={(e) =>
                    handleChange(block.id, e.target.value, block.text)
                  }
                  className="border border-gray-400 rounded px-2 py-1 w-28"
                >
                  {headingOptions.map((option) => (
                    <option key={option} value={option}>
                      {option.toUpperCase()}
                    </option>
                  ))}
                </select>
              ) : (
                <section
                  aria-label={`Result feedback for ${block.text}`}
                  className="mt-2 p-3 rounded border border-lightgray bg-white"
                >
                  <p
                    className={`font-medium ${
                      isCorrect
                        ? "text-[color:var(--primary-color)]"
                        : "text-[color:var(--error-color)]"
                    }`}
                  >
                    {isCorrect
                      ? "✔ Correct"
                      : `✘ Incorrect — should be ${block.correct.toUpperCase()}`}
                  </p>
                  <strong className="block mb-1 text-sm font-semibold text-darkergray">
                    Explanation for “{block.text}”:
                  </strong>
                  <p className="text-sm italic text-[color:var(--darker-gray)]">
                    {block.feedback}
                  </p>
                </section>
              )}
            </section>

            <Tag>{block.text}</Tag>

            {"paragraphs" in block
              ? block.paragraphs.map((para, i) => (
                  <p key={i} className="text-darkergray mb-2">
                    {para}
                  </p>
                ))
              : block.paragraph && (
                  <p className="text-darkergray mb-2">{block.paragraph}</p>
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
          <button onClick={resetActivity} className="start-button">
            Restart Activity
          </button>
        )}
      </div>
    </section>
  );
};

export default HeadingLevelsPractice;
