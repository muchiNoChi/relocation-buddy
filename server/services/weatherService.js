const { env } = require('process');
const { fetchData } = require('./flightsService');

const { API_KEY } = env;

async function getForecast(locationKey) {
  if (!API_KEY) {
    // Return mock data for testing
    return [
      {
        date: '2020-07-24T07:00:00+02:00',
        weatherText: 'Mostly cloudy w/ t-storms',
        weatherIcon: 16,
        temperature: 20,
      },
      {
        date: '2020-07-25T07:00:00+02:00',
        weatherText: 'Thunderstorms',
        weatherIcon: 15,
        temperature: 21,
      },
      {
        date: '2020-07-26T07:00:00+02:00',
        weatherText: 'Mostly cloudy w/ showers',
        weatherIcon: 13,
        temperature: 20,
      },
      {
        date: '2020-07-27T07:00:00+02:00',
        weatherText: 'Intermittent clouds',
        weatherIcon: 4,
        temperature: 20,
      },
      {
        date: '2020-07-28T07:00:00+02:00',
        weatherText: 'Mostly cloudy w/ t-storms',
        weatherIcon: 16,
        temperature: 21,
      },
    ];
  }

  const url = new URL(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}`);
  url.search = new URLSearchParams({
    apikey: API_KEY,
  }).toString();
  return fetchData(url).then(res => {
    const forecasts = res.DailyForecasts;
    const result = forecasts.map(forecast => {
      return {
        date: forecast.Date,
        weatherText: forecast.Day.IconPhrase,
        weatherIcon: forecast.Day.Icon,
        // TODO request temp in Celsius
        temperature: forecast.Temperature.Maximum.Value,
      };
    });
    return result;
  });
}

async function getCurrentWeather(locationKey) {
  if (!API_KEY) {
    // Return mock data for testing
    return {
      weatherText: 'Thunderstorms',
      weatherIcon: 15,
      temperature: 21,
    };
  }
  const url = new URL(`https://dataservice.accuweather.com/currentconditions/v1/${locationKey}`);
  url.search = new URLSearchParams({
    apikey: API_KEY,
  }).toString();
  return fetchData(url).then(res => {
    const weather = res[0];
    return {
      weatherText: weather.WeatherText,
      weatherIcon: weather.WeatherIcon,
      // TODO add support of Imperial Units
      temperature: weather.Temperature.Metric.Value,
    };
  });
}

exports.getForecast = getForecast;
exports.getCurrentWeather = getCurrentWeather;
