const { env } = require('process');
const fetch = require('node-fetch');

const { API_KEY } = env;

async function getForecast() {
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

function getCurrentWeather() {
  return true;
}

exports.getForecast = getForecast;
