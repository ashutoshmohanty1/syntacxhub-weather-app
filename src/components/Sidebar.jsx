import { FaCloudSun } from "react-icons/fa";

const Sidebar = ({ city, setCity, fetchWeatherData }) => {
  return (
    <div className="w-full lg:w-80 bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
      <div className="text-center mb-12">
        <FaCloudSun className="text-8xl text-yellow-300 mx-auto mb-6" />

        <h1 className="text-5xl font-bold text-white">
          Weather
        </h1>

        <h2 className="text-5xl font-bold text-white">
          Forecast App
        </h2>
      </div>

      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => {
            if(e.key === "Enter") {
                fetchWeatherData(city);
            }
        }}
        placeholder="Search location..."
        className="w-full px-5 py-4 rounded-full bg-white/20 text-white outline-none"
      />

      <button
        onClick={() => fetchWeatherData(city)}
        className="w-full mt-5 py-4 rounded-full bg-orange-600 text-white font-semibold"
      >
        Search
      </button>
    </div>
  );
};

export default Sidebar;