import { FaSun } from "react-icons/fa";

const Forecast = ({ forecast }) => {
  if (!forecast || forecast.length === 0) return null;

  // Take one forecast per day (around noon)
  const dailyForecast = forecast.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );

  return (
    <div className="mt-10">
      <h2 className="text-4xl font-bold text-white mb-8">
        5-Day Forecast
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {dailyForecast.slice(0, 5).map((item, index) => (
          <div
            key={index}
            className="bg-white/15 backdrop-blur-xl rounded-3xl p-8 text-center text-white shadow-lg hover:scale-105 transition duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4">
              {new Date(item.dt_txt).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </h3>

            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt="forecast"
              className="mx-auto w-20 h-20"
            />

            <p className="text-xl font-medium">
              {Math.round(item.main.temp)}°C
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;