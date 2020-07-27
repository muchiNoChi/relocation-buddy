const { env } = require('process');
const { fetchData } = require('./flightsService');
const { response } = require('express');

const { API_KEY } = env;

async function getForecast(locationKey) {
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
        temperature: forecast.Temperature.Maximum,
      };
    });
    return result;
  });
}

async function getCurrentWeather(locationKey) {
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
