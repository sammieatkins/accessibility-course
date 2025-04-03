export default function ContactPage() {
  return (
    <form
      action="https://formspree.io/f/mqapydjw"
      method="POST"
      className="max-w-lg mx-auto p-6 bg-lightgray rounded font-sans text-text "
    >
      <input
        type="hidden"
        name="_subject"
        value="New Contact Form Submission"
      />
      <input type="hidden" name="_redirect" value="/thank-you" />

      <div className="mb-4">
        <label htmlFor="name" className="block font-medium mb-1">
          Name{" "}
          <span className="text-accent font-bold" aria-hidden="true">
            *
          </span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full p-2 border border-darkgray rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block font-medium mb-1">
          Email{" "}
          <span className="text-accent font-bold" aria-hidden="true">
            *
          </span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full p-2 border border-darkgray rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block font-medium mb-1">
          Your Message{" "}
          <span className="text-accent font-bold" aria-hidden="true">
            *
          </span>
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full p-2 border border-darkgray rounded"
          rows="6"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="px-4 py-2 rounded text-white bg-accent hover:bg-accentdark"
      >
        Send Message
      </button>
    </form>
  );
}
