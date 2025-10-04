/* eslint-disable react/prop-types */
export default function ColorCard({ color, darkMode }) {
  return (
    <div
      className="w-80 md:w-96 lg:w-[500px] rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:scale-105 flex flex-col items-center border-2"
      style={{
        background: color,
        borderColor: darkMode
          ? "rgba(255,255,255,0.3)"
          : "rgba(0,0,0,0.2)",
      }}
    >
      {/* Top Image */}
      <div className="w-full h-48 overflow-hidden">
        <img
          src="https://m.media-amazon.com/images/S/pv-target-images/88a7eacff896a66b0a94966c82998f83234377e1b51f2181ff560cdfe4b8f3ff.jpg"
          alt="card"
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Text */}
      <div className="p-6 text-center">
        <h2
          className={`text-3xl font-extrabold drop-shadow-md ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
         Epic Adventure Awaits

        </h2>
        <p
          className={`mt-2 text-lg ${
            darkMode ? "text-gray-200" : "text-gray-700"
          }`}
        >
         Dive into a thrilling world where every choice shapes your journey. 

        </p>
      </div>
    </div>
  );
}
