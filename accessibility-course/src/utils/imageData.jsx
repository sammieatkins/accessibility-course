export const imageData = [
  {
    id: "",
    src: "/images/pug.png",
    alt: "Pug standing in dewy grass",
    contexts: [
      {
        context: (
          <>
            <h3 className="text-xl font-bold mb-2">
              Benefits of Morning Walks with Your Dog
            </h3>
            <p className="text-gray-700">
              Starting your day with a walk improves both you and your dog’s
              physical and mental health. It creates a routine, encourages
              bonding, and helps manage behavior throughout the day...
            </p>
          </>
        ),
        isDecorative: true,
        explanation:
          "This image is used as a visual banner and doesn't add any new or essential information to the blog post.",
        altForContext: '"alt="""',
      },
      {
        context: (
          <>
            <h3 className="text-xl font-bold mb-2">
              Available Pug for Adoption
            </h3>
            <ul className="mb-2 text-gray-700">
              <li>
                <strong>Breed:</strong> Pug
              </li>
              <li>
                <strong>Sex:</strong> Male
              </li>
              <li>
                <strong>Age:</strong> 3 years
              </li>
              <li>
                <strong>Weight:</strong> 18 lbs
              </li>
              <li>
                <strong>Height:</strong> 12 inches at the shoulder
              </li>
            </ul>
            <p className="text-gray-700">
              This friendly and well-behaved pug is looking for a loving home.
              He enjoys early morning walks, snuggles, and snacks. Adoption fee:{" "}
              <strong>$150</strong>.
            </p>
          </>
        ),
        isDecorative: false,
        explanation:
          "The image helps potential adopters understand what the specific dog looks like. It's essential for making informed decisions and adds meaningful context to the listing.",
        altForContext:
          'alt="Fawn-colored pug standing in grass, facing the camera"',
      },
    ],
  },
];
