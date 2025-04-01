import { useState } from "react";

const questions = [
  {
    id: 1,
    linkText: "Click here",
    options: [
      { url: "/submit-form", isCorrect: true },
      { url: "/about" },
      { url: "/contact" },
      { url: "/faq" },
    ],
    type: "bad",
    explanation:
      '"Click here" doesn’t tell users where the link goes or what action they’re taking. Descriptive text like “Submit your form” would be clearer.',
  },
  {
    id: 2,
    linkText: "Download the application form (PDF)",
    options: [
      { url: "/faq" },
      { url: "/register" },
      { url: "/application.pdf", isCorrect: true },
      { url: "/blog" },
    ],
    type: "good",
    explanation:
      "This link is actually a great example — it clearly tells users what they're downloading and in what format.",
  },
  {
    id: 3,
    linkText: "Read more",
    options: [
      { url: "/about" },
      { url: "/pricing" },
      { url: "/accessibility-updates", isCorrect: true },
      { url: "/contact" },
    ],
    type: "bad",
    explanation:
      '"Read more" is vague on its own. Better link text would reflect the article or topic title, like “Read more about accessibility updates.”',
  },
  {
    id: 4,
    linkText: "Learn more",
    options: [
      { url: "/features" },
      { url: "/pricing" },
      { url: "/accessibility", isCorrect: true },
      { url: "/contact" },
    ],
    type: "mediocre",
    explanation:
      '"Learn more" is a step up from "Click here," but it’s still not very specific. If possible, link to something like “Learn more about accessibility features.',
  },
  {
    id: 5,
    linkText: "Register for the inclusive design webinar",
    options: [
      { url: "/register-webinar", isCorrect: true },
      { url: "/about" },
      { url: "/newsletter" },
      { url: "/resources" },
    ],
    type: "good",
    explanation:
      "Clear and specific. This tells the user exactly what they’ll do when they follow the link.",
  },
];

export default function LinkTextMatchingActivity() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const correctAnswer = currentQuestion.options.find(
    (opt) => opt.isCorrect
  )?.url;
  const isCorrect = selectedAnswer === correctAnswer;

  const handleSubmit = () => {
    if (selectedAnswer) setSubmitted(true);
  };

  const handleNext = () => {
    setSelectedAnswer("");
    setSubmitted(false);
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const renderFeedback = () => {
    const { type, explanation } = currentQuestion;

    const shared = "p-3 border-l-4 rounded-sm";
    if (isCorrect && (type === "bad" || type === "mediocre")) {
      return (
        <div className={`${shared} bg-yellow-100 border-yellow-400`}>
          <p className="font-semibold mb-1">You lucky duck!</p>
          <p>{explanation}</p>
        </div>
      );
    }

    if (isCorrect && type === "good") {
      return (
        <div className={`${shared} bg-lightgreen border-accent`}>
          <p className="font-semibold mb-1">
            Nice! This must be a descriptive link ;)
          </p>
          <p>{explanation}</p>
        </div>
      );
    }

    return (
      <div className={`${shared} bg-red-100 border-red-600`}>
        <p className="font-semibold mb-1">
          {!isCorrect && (type === "bad" || type === "mediocre")
            ? "Nope — and that’s the problem."
            : "Almost!"}
        </p>
        <p>{explanation}</p>
      </div>
    );
  };

  return (
    <div className="max-w-2xl mx-auto p-4 rounded font-sans text-text bg-background">
      <h2 className="text-2xl font-bold mb-2">Link Text Matching</h2>

      <p className="text-sm font-semibold text-darkgray mb-3">
        Progress: {currentQuestionIndex + 1} / {questions.length}
      </p>

      <div className="p-4 border rounded bg-lightgray">
        <fieldset>
          <legend className="font-medium mb-3">
            Which destination makes the most sense for this link text?
          </legend>
          <p className="italic mb-4">"{currentQuestion.linkText}"</p>

          <div className="space-y-2">
            {currentQuestion.options.map((opt, idx) => {
              const id = `q${currentQuestion.id}-opt${idx}`;
              return (
                <div key={id} className="flex items-center">
                  <input
                    type="radio"
                    id={id}
                    name="option"
                    value={opt.url}
                    disabled={submitted}
                    checked={selectedAnswer === opt.url}
                    onChange={() => setSelectedAnswer(opt.url)}
                    className="mr-2"
                  />
                  <label htmlFor={id}>{opt.url}</label>
                </div>
              );
            })}
          </div>

          {!submitted ? (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!selectedAnswer}
              className={`mt-4 px-4 py-2 rounded text-white ${
                selectedAnswer
                  ? "bg-accent hover:bg-accentdark"
                  : "bg-accent opacity-50 cursor-not-allowed"
              }`}
            >
              Submit
            </button>
          ) : (
            <div className="mt-4 space-y-4">
              {renderFeedback()}

              {currentQuestionIndex < questions.length - 1 && (
                <button
                  onClick={handleNext}
                  className="px-4 py-2 rounded text-white bg-hoverdark hover:brightness-110"
                >
                  Next Question
                </button>
              )}
            </div>
          )}
        </fieldset>
      </div>
    </div>
  );
}
