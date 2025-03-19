"use client";
import { useState } from "react";

const SensoryCharacteristicsPractice = () => {
  // Store colors dynamically using an object
  const [colors, setColors] = useState({
    bgColor: "#ffffff", // Background
    largeTextColor: "#000000", // Large text
    smallTextColor: "#333333", // Small text
    buttonBgColor: "#007bff", // Button background
    buttonTextColor: "#ffffff", // Button text
    linkColor: "#0000ee", // Links
  });

  // Update color dynamically when user picks a new one
  const handleColorChange = (key, value) => {
    console.log(`${key} changed to:`, value);
    setColors((prevColors) => ({ ...prevColors, [key]: value }));
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Accessible Color Palette Tester</h2>

      {/* Generate Color Pickers Dynamically */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {Object.entries(colors).map(([key, value]) => (
          <div key={key}>
            <label className="block capitalize">{key.replace(/([A-Z])/g, " $1")}</label>
            <input 
              type="color" 
              value={value} 
              onChange={(e) => handleColorChange(key, e.target.value)}
            />
          </div>
        ))}
      </div>

      {/* Mini Website Preview */}
      <div className="p-6 border rounded-lg shadow" style={{ backgroundColor: colors.bgColor }}>
        <h1 className="text-3xl font-bold mb-2" style={{ color: colors.largeTextColor }}>
          This is Large Heading Text
        </h1>
        <p className="mb-4" style={{ color: colors.smallTextColor }}>
          This is regular body text. Make sure it's readable.
        </p>
        <a href="#" className="underline" style={{ color: colors.linkColor }}>
          This is a sample link
        </a>
        <button 
          className="px-4 py-2 rounded mt-4" 
          style={{ backgroundColor: colors.buttonBgColor, color: colors.buttonTextColor }}
        >
          Click Me
        </button>
      </div>
    </div>
  );
};

export default SensoryCharacteristicsPractice;
