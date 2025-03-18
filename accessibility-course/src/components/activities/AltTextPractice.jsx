import { useState } from 'react';

const AltTextPractice = () => {
  const [userAltText, setUserAltText] = useState('');
  const [imageIndex, setImageIndex] = useState(0);
  const [feedbackVisible, setFeedbackVisible] = useState(false);
  const [userThinksCorrect, setUserThinksCorrect] = useState(null);

  const images = [
    // CHANGE THESE !!!!
    {
      src: '/images/pug.png',
      question: 'A social media post about a lazy Sunday with a pet.',
      exampleAnswer: 'A pug lying on a cozy blanket, looking sleepy.',
    },
    {
      src: '/images/animals_graph.png',
      question: 'An educational slide showing animal population trends.',
      exampleAnswer: 'A bar graph comparing population sizes of different animals.',
    },
  ];

  const handleSubmit = () => {
    if (userAltText.trim() === '') return; // Prevent empty submissions

    // Show the example answer for comparison
    setFeedbackVisible(true);
  };

  const handleNext = () => {
    // Move to the next image
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    
    // Reset state for next round
    setUserAltText('');
    setFeedbackVisible(false);
    setUserThinksCorrect(null);
  };

  return (
    <div className="activity-container p-4 border rounded-lg max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Alt Text Practice</h2>
      <p className="mb-2 font-semibold">{images[imageIndex].question}</p>

      <img
        src={images[imageIndex].src}
        alt=""
        className="w-full h-auto rounded-lg shadow mb-3"
      />

      {!feedbackVisible ? (
        <>
          <textarea
            value={userAltText}
            onChange={(e) => setUserAltText(e.target.value)}
            placeholder="Write your alt text here..."
            className="w-full p-2 border rounded mb-3"
            rows="3"
          />
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </>
      ) : (
        <div className="mt-4">
          <h3 className="text-lg font-bold mb-2">Compare Your Answer</h3>
          <p><strong>Your Alt Text:</strong> {userAltText}</p>
          <p><strong>Example Alt Text:</strong> {images[imageIndex].exampleAnswer}</p>

          <p className="mt-3">Do you think your alt text was a good description?</p>
          <div className="flex gap-4 mt-2">
            <button
              onClick={() => setUserThinksCorrect(true)}
              className={`px-4 py-2 rounded ${userThinksCorrect === true ? 'bg-green-500 text-white' : 'bg-gray-300'}`}
            >
              Yes
            </button>
            <button
              onClick={() => setUserThinksCorrect(false)}
              className={`px-4 py-2 rounded ${userThinksCorrect === false ? 'bg-red-500 text-white' : 'bg-gray-300'}`}
            >
              No
            </button>
          </div>

          {userThinksCorrect !== null && (
            <button
              onClick={handleNext}
              className="mt-4 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition"
            >
              Next Image
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default AltTextPractice;
