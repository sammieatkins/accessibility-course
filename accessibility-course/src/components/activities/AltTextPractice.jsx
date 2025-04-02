// bulk up image data examples

"use client";
import { useState } from "react";

const AltTextPractice = () => {
  const [userAltText, setUserAltText] = useState("");
  const [imageIndex, setImageIndex] = useState(0);
  const [feedbackVisible, setFeedbackVisible] = useState(false);
  const [userThinksCorrect, setUserThinksCorrect] = useState(null);

  const images = [
    {
      src: "/images/pug.png",
      question: "A social media post about a lazy Sunday with a pet.",
      exampleAnswer: "A pug lying on a cozy blanket, looking sleepy.",
    },
    {
      src: "/images/animals_graph.png",
      question: "An educational slide showing animal population trends.",
      exampleAnswer:
        "A bar graph comparing population sizes of different animals.",
    },
  ];

  const handleSubmit = () => {
    if (userAltText.trim() === "") return;
    setFeedbackVisible(true);
  };

  const handleNext = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    setUserAltText("");
    setFeedbackVisible(false);
    setUserThinksCorrect(null);
  };

  const handleRestart = () => {
    setImageIndex(0);
    setUserAltText("");
    setFeedbackVisible(false);
    setUserThinksCorrect(null);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 font-sans text-text bg-background rounded">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-semibold text-darkgray">
          Progress: {imageIndex + 1} / {images.length}
        </p>
        <button
          onClick={handleRestart}
          className="px-3 py-1 rounded text-white bg-hoverdark hover:bg-accentdark"
        >
          Restart Activity
        </button>
      </div>

      <div className="p-4 border rounded bg-lightgray">
        <fieldset>
          <legend className="font-medium mb-3">
            {images[imageIndex].question}
          </legend>

          <img
            src={images[imageIndex].src}
            alt=""
            className="w-full h-auto rounded mb-4 shadow"
          />

          {!feedbackVisible ? (
            <>
              <label htmlFor="alt-text-input" className="sr-only">
                Enter alt text description
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
              <div className="p-3 border-l-4 rounded-sm bg-lightgreen border-accent mt-2">
                <p className="font-semibold mb-1">Example alt text:</p>
                <p>"{images[imageIndex].exampleAnswer}"</p>
              </div>

              <div className="mt-4">
                <p className="mb-1">
                  <strong>Your Alt Text:</strong> {userAltText}
                </p>
                <p className="mt-3">
                  Do you think your alt text was a good description?
                </p>
                <div className="flex gap-4 mt-2">
                  <button
                    onClick={() => setUserThinksCorrect(true)}
                    className={`px-4 py-2 rounded font-semibold ${
                      userThinksCorrect === true
                        ? "bg-green-500 text-white"
                        : "bg-lightgray text-text"
                    }`}
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => setUserThinksCorrect(false)}
                    className={`px-4 py-2 rounded font-semibold ${
                      userThinksCorrect === false
                        ? "bg-red-500 text-white"
                        : "bg-lightgray text-text"
                    }`}
                  >
                    No
                  </button>
                </div>

                {userThinksCorrect !== null && (
                  <button
                    onClick={handleNext}
                    className="mt-4 px-4 py-2 rounded text-white bg-hoverdark hover:bg-accentdark"
                  >
                    Next Image
                  </button>
                )}
              </div>
            </>
          )}
        </fieldset>
      </div>
    </div>
  );
};

export default AltTextPractice;
