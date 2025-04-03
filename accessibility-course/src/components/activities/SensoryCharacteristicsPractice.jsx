// add aria polite to the updating "small text fails contrast" warnings

"use client";
import { useState, useEffect } from "react";

const SensoryCharacteristicsPractice = () => {
  const initialColors = {
    backgroundColor: "#ffffff",
    largeTextColor: "#000000",
    smallTextColor: "#333333",
    buttonBackgroundColor: "#007bff",
    buttonTextColor: "#ffffff",
    linkColor: "#0000ee",
  };

  // Initialize colors with defaults and track hydration state
  const [colors, setColors] = useState(initialColors);
  const [hasLoadedColors, setHasLoadedColors] = useState(false);

  useEffect(() => {
    const savedColors = localStorage.getItem("savedColors");
    if (savedColors) {
      setColors(JSON.parse(savedColors));
    }
    setHasLoadedColors(true);
  }, []);

  useEffect(() => {
    if (hasLoadedColors) {
      localStorage.setItem("savedColors", JSON.stringify(colors));
    }
  }, [colors, hasLoadedColors]);

  // Function to reset colors to initial values
  const resetColors = () => {
    setColors(initialColors);
    localStorage.setItem("savedColors", JSON.stringify(initialColors));
  };
  // Handle color changes
  const handleColorChange = (key, value) => {
    setColors((prevColors) => ({ ...prevColors, [key]: value }));
  };
  // Function to calculate contrast ratio
  const getContrastRatio = (color1, color2) => {
    const hexToRgb = (hex) => {
      let r = parseInt(hex.substring(1, 3), 16) / 255;
      let g = parseInt(hex.substring(3, 5), 16) / 255;
      let b = parseInt(hex.substring(5, 7), 16) / 255;

      // Apply sRGB transformation
      const adjust = (c) =>
        c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;

      r = adjust(r);
      g = adjust(g);
      b = adjust(b);

      // Relative luminance calculation
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };

    const lum1 = hexToRgb(color1) + 0.05;
    const lum2 = hexToRgb(color2) + 0.05;

    return (Math.max(lum1, lum2) / Math.min(lum1, lum2)).toFixed(2);
  };

  // Function to get pass/fail styles
  const getRatingStyle = (contrast, requiredRatio) => {
    return contrast >= requiredRatio
      ? { text: "Pass", background: "bg-[#A8E6A2] text-black border-[#7DBF78]" }
      : {
          text: "Fail",
          //         background: "bg-[#FFD6A5] text-black border-[#FFA552]", // Light Orange (Fail)
          background: "bg-[#FFB85C] text-black border-[#E59400]",
        };
  };

  // Calculate contrast ratios
  const contrastRatios = {
    "Large Text to Background": getContrastRatio(
      colors.largeTextColor,
      colors.backgroundColor
    ),
    "Small Text to Background": getContrastRatio(
      colors.smallTextColor,
      colors.backgroundColor
    ),
    "Button to Background": getContrastRatio(
      colors.buttonBackgroundColor,
      colors.backgroundColor
    ),
    "Button Text to Button": getContrastRatio(
      colors.buttonTextColor,
      colors.buttonBackgroundColor
    ),
    "Link to Background": getContrastRatio(
      colors.linkColor,
      colors.backgroundColor
    ),
  };

  // generates CSS export code
  function generateCss(colors) {
    return `:root {\n${Object.entries(colors)
      .map(
        ([key, value]) =>
          `  --${key.replace(
            /[A-Z]/g,
            (m) => `-${m.toLowerCase()}`
          )}: ${value};`
      )
      .join("\n")}\n}`;
  }

  // Copy button for export
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const css = generateCss(colors);
    try {
      await navigator.clipboard.writeText(css);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="p-5 pt-0 max-w-[1100px]">
      {/* Row 1: Pick Colors & Website Preview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pick Your Colors */}
        <div>
          <h2 className="text-xl mb-3">Pick Your Colors</h2>
          <div className="grid gap-3 mb-6">
            {Object.entries(colors).map(([key, value]) => {
              const id = `color-${key}`;
              return (
                <div key={key} className="flex items-center gap-2">
                  <input
                    type="color"
                    id={id}
                    value={value}
                    onChange={(e) => handleColorChange(key, e.target.value)}
                    className="w-10 h-6 rounded-lg appearance-none border border-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent-color-dark)]"
                  />
                  <label
                    id={`${id}-label`}
                    htmlFor={id}
                    className="capitalize whitespace-nowrap"
                  >
                    {key.replace(/([A-Z])/g, " $1")}
                  </label>
                </div>
              );
            })}
          </div>
          <button
            onClick={resetColors}
            className="text-white transition bg-accent px-4 py-2 rounded-lg shadow hover:bg-accentdark focus:ring-2 focus:ring-offset-2"
          >
            Reset Colors
          </button>
        </div>

        {/* Website Template Preview */}
        <div>
          <h2 className="text-xl mb-3">Preview</h2>
          <div
            className="p-6 border rounded-lg shadow relative"
            style={{ backgroundColor: colors.backgroundColor }}
          >
            {/* Large Heading */}
            <div className="flex items-center">
              <h3
                className="text-xl font-semibold mb-0"
                style={{ color: colors.largeTextColor }}
              >
                This is Large Heading Text
              </h3>
              {getRatingStyle(contrastRatios["Large Text to Background"], 3.0)
                .text === "Fail" && (
                <p className="ml-3 px-3 py-1 bg-[#FFB85C] text-black border-[#E59400] text-xs rounded-lg shadow w-max">
                  Large text fails contrast.
                </p>
              )}
            </div>

            {/* Small Text */}
            <div className="flex items-center">
              <p style={{ color: colors.smallTextColor }}>
                This is regular body text.
              </p>
              {getRatingStyle(contrastRatios["Small Text to Background"], 4.5)
                .text === "Fail" && (
                <p className="mt-1 ml-3 px-3 py-1 bg-[#FFB85C] text-black border-[#E59400] text-xs rounded-lg shadow w-max">
                  Small text fails contrast.
                </p>
              )}
            </div>

            {/* Link */}
            <div className="flex items-center">
              <a
                href="#"
                className="underline mt-2 mb-2 block"
                style={{ color: colors.linkColor }}
              >
                This is a sample link
              </a>
              {getRatingStyle(contrastRatios["Link to Background"], 4.5)
                .text === "Fail" && (
                <p className="ml-3 px-3 py-1 bg-[#FFB85C] text-black border-[#E59400] text-xs rounded-lg shadow w-max">
                  Link color fails contrast.
                </p>
              )}
            </div>

            {/* Button */}
            <div className="flex items-center mt-2">
              <button
                className="px-4 py-2 rounded block"
                style={{
                  backgroundColor: colors.buttonBackgroundColor,
                  color: colors.buttonTextColor,
                }}
              >
                Sample Button
              </button>

              {/* Warnings */}
              <div className="ml-3">
                {/* Button Background to Page Background Contrast */}
                {getRatingStyle(contrastRatios["Button to Background"], 4.5)
                  .text === "Fail" && (
                  <p className="px-3 py-1 bg-[#FFB85C] text-black border-[#E59400] text-xs rounded-lg shadow w-max">
                    Button background fails contrast.
                  </p>
                )}

                {/* Button Text to Button Background Contrast */}
                {getRatingStyle(contrastRatios["Button Text to Button"], 4.5)
                  .text === "Fail" && (
                  <p className="mt-1 px-3 py-1 bg-[#FFB85C] text-black border-[#E59400] text-xs rounded-lg shadow w-max">
                    Button text fails contrast.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: WCAG Contrast Ratings */}
      <div className="mt-6">
        <h2 className="text-xl mb-3">WCAG Contrast Ratings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(contrastRatios).map(([label, contrast], index) => {
            const requiredAA = label.includes("Large") ? 3.0 : 4.5;
            const requiredAAA = label.includes("Large") ? 4.5 : 7.0;
            const { text: aaText, background: aaBackground } = getRatingStyle(
              contrast,
              requiredAA
            );
            const { text: aaaText, background: aaaBackground } = getRatingStyle(
              contrast,
              requiredAAA
            );

            return (
              <div
                key={index}
                className="p-3 rounded shadow-sm bg-[#f2f2f2] border border-gray-300 text-sm flex flex-col items-start"
              >
                <h3 className="text-lg font-semibold">{label}</h3>
                <div className="flex items-center justify-between w-full">
                  <p className="font-bold text-lg">{contrast}:1</p>
                  <div className="flex gap-2 text-xs">
                    <span className={`px-3 py-1 rounded ${aaBackground}`}>
                      WCAG AA: {aaText}
                    </span>
                    <span className={`px-3 py-1 rounded ${aaaBackground}`}>
                      WCAG AAA: {aaaText}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Export Explanation */}
      {/* <div className="mt-6 p-4 flex items-start gap-4 bg-transparent">
        <span
          className="material-symbols--palette-outline text-2xl text-text-color mt-1"
          aria-hidden="true"
        ></span> */}
      <div>
        <h2 className="text-xl mt-6">Export Your Accessible Colors</h2>
        <p className="text-text-color">
          Great job creating an accessible color palette! Now, you can easily
          apply it to your own projects. Just copy the CSS code below and paste
          it into your stylesheets. This will ensure your design remains
          visually inclusive and meets accessibility standards.
        </p>
      </div>
      {/* </div> */}

      {/* Row 3: CSS & Color Table */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="mb-6">
          {/* Section title */}
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl">CSS Export</h2>
          </div>

          {/* Code block + floating copy button */}
          <div className="relative">
            <button
              onClick={handleCopy}
              aria-live="polite"
              className="absolute top-2 right-3 z-10 flex items-center gap-1 text-[var(--text-color)] hover:underline"
            >
              {copied ? (
                <>
                  <span
                    className="material-symbols--check-rounded text-base"
                    aria-hidden="true"
                  />
                  Copied
                </>
              ) : (
                <>
                  <span
                    className="material-symbols--content-copy-outline-rounded text-base"
                    aria-hidden="true"
                  />
                  Copy
                </>
              )}
            </button>

            <pre className="block bg-[var(--code-bg)] m-0 text-[var(--code-text-color)] p-4 rounded text-sm border whitespace-pre">
              {generateCss(colors)}
            </pre>
          </div>
        </div>
        <div>
          <h2 className="text-xl mb-3">Color Table</h2>
          <div className="rounded-lg border border-gray-300 overflow-hidden">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-2 text-left bg-[#f2f2f2]">
                    Property
                  </th>
                  <th className="border p-2 text-left bg-[#f2f2f2]">Value</th>
                  <th className="border p-2 text-left bg-[#f2f2f2]">Preview</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(colors).map(([key, value], index) => (
                  <tr key={key}>
                    <td className="border p-2 capitalize">
                      {key.replace(/([A-Z])/g, " $1")}
                    </td>
                    <td className="border p-2">{value}</td>
                    <td className="border p-2">
                      <div
                        className="w-6 h-6 rounded border border-gray-400"
                        style={{ backgroundColor: value }}
                      ></div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SensoryCharacteristicsPractice;
