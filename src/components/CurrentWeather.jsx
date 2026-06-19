import {
  FaSun,
  FaWind,
  FaTint,
  FaTemperatureHigh,
} from "react-icons/fa";

const CurrentWeather = ({ weather }) => {
  if (!weather) return null;

  const temp = Math.round(weather.main.temp);
  const humidity = weather.main.humidity;
  const wind = weather.wind.speed;
  const feelsLike = Math.round(weather.main.feels_like);
  const condition = weather.weather[0].main;
  const city = weather.name;
  const country = weather.sys.country;

  return (
    <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-12 shadow-2xl text-white mb-10">
      <h2 className="text-2xl font-semibold mb-6">
        Current Weather
      </h2>

      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div>
          <h1 className="text-8xl font-bold leading-none">
            {temp}°C
          </h1>

            <p className="text-lg mb-3">
                {new Date().toLocaleDateString()}
            </p>

          <p className="text-2xl mt-4">
            {condition}
          </p>

          <p className="text-lg text-white/90 mt-2">
            {city}, {country}
          </p>
        </div>

        <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
            alt="weather"
            className="w-36 h-36"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 flex items-center gap-4">
          <FaTint className="text-2xl" />

          <div>
            <p className="text-sm text-white/80">
              Humidity
            </p>

            <h3 className="text-2xl font-semibold">
              {humidity}%
            </h3>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 flex items-center gap-4">
          <FaWind className="text-2xl" />

          <div>
            <p className="text-sm text-white/80">
              Wind Speed
            </p>

            <h3 className="text-2xl font-semibold">
              {wind} km/h
            </h3>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 flex items-center gap-4">
          <FaTemperatureHigh className="text-2xl" />

          <div>
            <p className="text-sm text-white/80">
              Feels Like
            </p>

            <h3 className="text-2xl font-semibold">
              {feelsLike}°C
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;