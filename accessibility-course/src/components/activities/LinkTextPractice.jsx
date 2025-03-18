import { useState } from "react";

const LinkTextActivity = () => {
  const [textColor, setTextColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [buttonColor, setButtonColor] = useState("#007bff");
  const [linkColor, setLinkColor] = useState("#0000ee");

  // Function to calculate contrast ratio
  const getContrastRatio = (color1, color2) => {
    const hexToRgb = (hex) => {
      let r = parseInt(hex.substring(1, 3), 16);
      let g = parseInt(hex.substring(3, 5), 16);
      let b = parseInt(hex.substring(5, 7), 16);
      return [r / 255, g / 255, b / 255].map((c) =>
        c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
      );
    };

    const luminance = (rgb) => rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722;

    const lum1 = luminance(hexToRgb(color1)) + 0.05;
    const lum2 = luminance(hexToRgb(color2)) + 0.05;

    return (Math.max(lum1, lum2) / Math.min(lum1, lum2)).toFixed(2);
  };

  const getRatingStyle = (contrast, requiredRatio) => {
    return contrast >= requiredRatio
      ? { text: "✅ Pass", color: "text-green-600", bg: "bg-green-100" }
      : { text: "❌ Fail", color: "text-red-600", bg: "bg-red-100" };
  };

  const textContrast = getContrastRatio(textColor, bgColor);
  const buttonContrast = getContrastRatio(buttonColor, bgColor);
  const linkContrast = getContrastRatio(linkColor, bgColor);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Color Contrast Activity</h2>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block">Text Color</label>
          <input
            type="color"
            value={textColor}
            onInput={(e) => {
              console.log("Text Color Changed:", e.target.value);
              setTextColor(e.target.value);
            }}
            className="w-full cursor-pointer"
          />
        </div>
        <div>
          <label className="block">Background Color</label>
          <input
            type="color"
            value={bgColor}
            onInput={(e) => {
              console.log("Background Color Changed:", e.target.value);
              setBgColor(e.target.value);
            }}
            className="w-full cursor-pointer"
          />
        </div>
        <div>
          <label className="block">Button Color</label>
          <input
            type="color"
            value={buttonColor}
            onInput={(e) => {
              console.log("Button Color Changed:", e.target.value);
              setButtonColor(e.target.value);
            }}
            className="w-full cursor-pointer"
          />
        </div>
        <div>
          <label className="block">Link Color</label>
          <input
            type="color"
            value={linkColor}
            onInput={(e) => {
              console.log("Link Color Changed:", e.target.value);
              setLinkColor(e.target.value);
            }}
            className="w-full cursor-pointer"
          />
        </div>
      </div>

      <div className="border p-4 rounded-lg shadow" style={{ backgroundColor: bgColor, color: textColor }}>
        <h3 className="text-2xl font-semibold">Live Preview</h3>
        <p>This is an example paragraph to test color contrast.</p>
        <a 
          href="#" 
          style={{ 
            color: linkColor, 
            textDecoration: "underline", 
            display: "inline-block", 
          }}
        >
          This is a link
        </a>
        <button 
          style={{ 
            backgroundColor: buttonColor, 
            color: textColor,
            margin: "10px"
          }} 
          className="px-4 py-2 rounded"
        >
          Sample Button
        </button>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold">Contrast Ratings</h3>
        <div className="space-y-2">
          {[
            { label: "Text to Background", contrast: textContrast, required: 4.5 },
            { label: "Button to Background", contrast: buttonContrast, required: 4.5 },
            { label: "Link to Background", contrast: linkContrast, required: 4.5 }
          ].map(({ label, contrast, required }, index) => {
            const { text, color, bg } = getRatingStyle(contrast, required);
            return (
              <div key={index} className={`p-2 rounded ${bg} ${color} font-semibold`}>
                {label}: {contrast} - {text}
              </div>
            );
          })}
        </div>
      </div>

      {/* Test Function */}
      <TestColorPicker />
    </div>
  );
};

// 🔹 **Test Function for Debugging**
function TestColorPicker() {
  return (
    <div className="mt-8 p-4 border border-gray-300 rounded-lg">
      <h2 className="text-lg font-bold">Test Color Picker</h2>
      <input
        type="color"
        onInput={(e) => console.log("Test Picker Changed:", e.target.value)}
        className="w-full cursor-pointer"
      />
    </div>
  );
}

export default LinkTextActivity;
