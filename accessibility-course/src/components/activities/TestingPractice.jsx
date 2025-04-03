import { useState } from "react";

const CRITERIA = [
  {
    id: "1.3.1",
    title: "Info and Relationships",
    description:
      "Semantic HTML is used appropriately (e.g., headings, lists, labels)",
    group: "Structure & Semantics",
    url: "https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html",
  },
  {
    id: "2.4.6",
    title: "Headings and Labels",
    description:
      "Headings are used consistently and describe the topic or purpose",
    group: "Structure & Semantics",
    url: "https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html",
  },
  {
    id: "1.1.1",
    title: "Non-text Content",
    description: "All meaningful images have appropriate alt text",
    group: "Images",
    url: "https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html",
  },
  {
    id: "1.4.3",
    title: "Contrast (Minimum)",
    description: "Text has sufficient contrast against the background",
    group: "Visual Design",
    url: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html",
  },
  {
    id: "1.4.11",
    title: "Non-text Contrast",
    description: "Icons and controls have enough contrast",
    group: "Visual Design",
    url: "https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html",
  },
  {
    id: "2.1.1",
    title: "Keyboard",
    description: "All functionality is available using only the keyboard",
    group: "Navigation",
    url: "https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html",
  },
  {
    id: "2.4.7",
    title: "Focus Visible",
    description: "It's always clear which element has keyboard focus",
    group: "Navigation",
    url: "https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html",
  },
  {
    id: "2.1.2",
    title: "No Keyboard Trap",
    description:
      "Users can move focus away from all components using keyboard only",
    group: "Navigation",
    url: "https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html",
  },
  {
    id: "4.1.2",
    title: "Name, Role, Value",
    description:
      "Interactive components expose accessible name, role, and state",
    group: "Assistive Tech Support",
    url: "https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html",
  },
  {
    id: "2.5.3",
    title: "Label in Name",
    description: "Visible labels match what is announced by assistive tech",
    group: "Assistive Tech Support",
    url: "https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html",
  },
  {
    id: "1.4.4",
    title: "Resize Text",
    description: "Text can be resized up to 200% without loss of content",
    group: "Zoom & Scaling",
    url: "https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html",
  },
  {
    id: "1.4.10",
    title: "Reflow",
    description: "No horizontal scrolling is needed at 320px width",
    group: "Zoom & Scaling",
    url: "https://www.w3.org/WAI/WCAG22/Understanding/reflow.html",
  },
  {
    id: "2.4.1",
    title: "Bypass Blocks",
    description: "Skip link or other method provided to skip repeated content",
    group: "Navigation",
    url: "https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html",
  },
];

export default function TestingPractice() {
  const [results, setResults] = useState({});

  const handleChange = (id, value) => {
    setResults((prev) => ({ ...prev, [id]: value }));
  };

  const grouped = CRITERIA.reduce((acc, item) => {
    acc[item.group] = acc[item.group] || [];
    acc[item.group].push(item);
    return acc;
  }, {});

  const total = CRITERIA.length;
  const passed = Object.values(results).filter((v) => v === "pass").length;

  return (
    <div className="max-w-2xl mx-auto p-4 font-sans text-text bg-background rounded">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Testing Practice</h2>
        <button
          className="px-3 py-1 rounded text-white bg-hoverdark hover:bg-accentdark"
          onClick={() => setResults({})}
        >
          Restart Activity
        </button>
      </div>

      <p className="text-sm font-semibold text-darkgray mb-6">
        Walk through your site top to bottom and evaluate each success
        criterion. Use keyboard nav, screen readers, zoom, high contrast, and
        automated tools. Mark whether each one <strong>passes</strong> or{" "}
        <strong>fails</strong>.
      </p>

      <div className="space-y-6">
        {Object.entries(grouped).map(([group, items]) => (
          <section
            key={group}
            className="p-4 border rounded bg-lightgray"
          >
            <h3 className="text-lg font-semibold text-primary mb-3">{group}</h3>
            <ul className="space-y-4">
              {items.map(({ id, title, description, url }) => (
                <li key={id} className="flex flex-col gap-2">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div>
                      <p className="font-semibold text-sm text-heading-color">
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline text-link hover:text-link-hover"
                        >
                          WCAG {id}
                        </a>{" "}
                        {title}
                      </p>
                      <p className="text-sm text-text-color leading-snug mt-1">
                        {description}
                      </p>
                    </div>
                    <div className="flex gap-4 mt-1 sm:mt-0">
                      <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-text-color">
                        <input
                          type="radio"
                          name={id}
                          value="pass"
                          checked={results[id] === "pass"}
                          onChange={() => handleChange(id, "pass")}
                          className="h-5 w-5"
                          style={{ accentColor: "var(--accent-color)" }}
                        />
                        Pass
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-text-color">
                        <input
                          type="radio"
                          name={id}
                          value="fail"
                          checked={results[id] === "fail"}
                          onChange={() => handleChange(id, "fail")}
                          className="h-5 w-5"
                          style={{ accentColor: "var(--accent-color)" }}
                        />
                        Fail
                      </label>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="text-center space-y-4 mt-8">
        <div className="text-lg font-medium text-heading-color">
          You’ve marked {passed} of {total} criteria as{" "}
          <strong>passing</strong>.
        </div>
        {passed === total && (
          <div className="text-base font-semibold text-green-700">
            Excellent! Your site passed every check.
          </div>
        )}
      </div>
    </div>
  );
}
