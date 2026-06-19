import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import { getCurrentWeather, getForecast } from "./services/weatherApi";

function App() {
  const [city, setCity] = useState("Bhubaneswar");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeatherData = async (cityName) => {
    try {
      setLoading(true);
      setError("");

      const weatherData = await getCurrentWeather(cityName);
      const forecastData = await getForecast(cityName);

      setWeather(weatherData);
      setForecast(forecastData.list);
    } catch (err) {
      setError("City not found. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData(city);
  }, []);

  // Dynamic Background
  const getBackground = () => {
    if (!weather) {
      return "from-orange-500 via-orange-400 to-yellow-400";
    }

    const condition = weather.weather[0].main;

    switch (condition) {
      case "Clear":
        return "from-orange-500 via-orange-400 to-yellow-400";

      case "Clouds":
        return "from-slate-700 via-slate-500 to-gray-400";

      case "Rain":
      case "Drizzle":
        return "from-blue-900 via-blue-700 to-blue-500";

      case "Thunderstorm":
        return "from-gray-900 via-slate-800 to-blue-900";

      case "Snow":
        return "from-sky-100 via-blue-100 to-white";

      case "Mist":
      case "Fog":
      case "Haze":
        return "from-gray-500 via-gray-400 to-gray-300";

      default:
        return "from-orange-500 via-orange-400 to-yellow-400";
    }
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${getBackground()} p-10 md:p-16 transition-all duration-1000`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-14 items-start">
          <Sidebar
            city={city}
            setCity={setCity}
            fetchWeatherData={fetchWeatherData}
          />

          <div className="flex-1 w-full">
            {loading && (
              <div className="flex justify-center items-center py-10">
                <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

            {error && (
              <div className="bg-red-500/20 border border-red-300 text-white p-4 rounded-xl mb-6">
                {error}
              </div>
            )}

            {!loading && weather && (
              <>
                <CurrentWeather weather={weather} />
                <Forecast forecast={forecast} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;