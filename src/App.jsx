import { useState } from "react";
import Card from "./components/ColorCard";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [cardGradient, setCardGradient] = useState(
    "linear-gradient(to right, rgb(128,0,128), rgb(0,128,255))"
  );

  const gradientPresets = [
    "linear-gradient(to right, red, yellow)",
    "linear-gradient(to right, blue, pink)",
    "linear-gradient(to right, purple, cyan)",
    "linear-gradient(to right, orange, green)",
    "linear-gradient(to right, teal, lime)",
    "linear-gradient(to right, indigo, fuchsia)",
  ];

  // Update card gradient automatically based on slider
  const handleSliderChange = (e) => {
    const val = Number(e.target.value);
    setSliderValue(val);
    const r = val;
    const g = 255 - val;
    const b = (val * 2) % 255;
    // Dynamic gradient from one color to another
    const dynamicGradient = `linear-gradient(to right, rgb(${r},${g},${b}), rgb(${255 - r},${b},${g}))`;
    setCardGradient(dynamicGradient);
  };

  const applyGradient = (grad) => setCardGradient(grad);

  return (
    <div
      className={`w-full h-screen flex flex-col items-center justify-center p-4 transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Dark/Light Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-6 right-6 px-5 py-2 rounded-full shadow-xl font-semibold 
        bg-gradient-to-r from-indigo-500 to-pink-500 text-white hover:scale-110 transition-transform duration-300"
      >
        {darkMode ? "🌞 Light" : "🌙 Dark"}
      </button>

      {/* Middle Card */}
      <Card color={cardGradient} darkMode={darkMode} />

      {/* RGB Scroll Bar */}
      <div className="fixed bottom-38 md:bottom-26 p-2 w-[90%] md:w-[60%] lg:w-[50%] flex flex-col items-center">
        <label className={`"text-white font-bold mb-3 text-lg" ${darkMode ? "text-white" : "text-gray-800"}`}>
          🎨 Scroll to Change Card Gradient
        </label>
        <div className="relative flex items-center w-full">
          {/* Live Color Circle */}
          <div
            className="absolute -translate-x-1/2 w-8 h-8 rounded-full border-4 cursor-pointer border-white shadow-xl transition-all duration-300"
            style={{
              background: cardGradient,
              left: `${(sliderValue / 255) * 100}%`,
            }}
          ></div>

          <input
            type="range"
            min="0"
            max="255"
            value={sliderValue}
            onChange={handleSliderChange}
            className="w-full h-4 rounded-full appearance-none cursor-pointer bg-gradient-to-r from-red-500 via-green-500 to-blue-500"
          />
        </div>
      </div>

      {/* Gradient Preset Buttons */}
      <div className="fixed bottom-10 flex flex-wrap gap-3 justify-center">
        {gradientPresets.map((grad, idx) => (
          <button
            key={idx}
            onClick={() => applyGradient(grad)}
            className="px-5 py-2 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
            style={{ background: grad }}
          >
            Gradient {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
