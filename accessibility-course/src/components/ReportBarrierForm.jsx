export default function ReportBarrierPage() {
  return (
    <form
      action="https://formspree.io/f/xgvanlqw"
      method="POST"
      className="max-w-lg mx-auto p-6 bg-lightgray rounded font-sans text-text"
    >
      <input
        type="hidden"
        name="_subject"
        value="New Accessibility Barrier Report"
      />
      <div className="mb-4">
        <label htmlFor="name" className="block font-medium mb-1">
          Name <span className="text-sm text-darkgray">(optional)</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full p-2 border border-darkgray rounded"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block font-medium mb-1">
          Email{" "}
          <span className="text-sm text-darkgray">
            (optional, in case we need to follow up)
          </span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full p-2 border border-darkgray rounded"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="location" className="block font-medium mb-1">
          Page or area of the site{" "}
          <span className="text-accent font-bold" aria-hidden="true">
            *
          </span>
        </label>
        <input
          type="text"
          id="location"
          name="location"
          className="w-full p-2 border border-darkgray rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block font-medium mb-1">
          What was the issue?{" "}
          <span className="text-accent font-bold" aria-hidden="true">
            *
          </span>
        </label>
        <textarea
          id="description"
          name="description"
          className="w-full p-2 border border-darkgray rounded"
          rows="5"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="px-4 py-2 rounded text-white bg-accent hover:bg-accentdark"
      >
        Submit Report
      </button>
    </form>
  );
}
