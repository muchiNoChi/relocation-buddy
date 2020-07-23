import { env } from 'process';
import * as fetch from 'node-fetch';

const API_KEY = env.API_KEY;

// TODO implement

async function getLocationKey() {
  const url = new URL('https://dataservice.accuweather.com/locations/v1/cities/search');
  url.search = new URLSearchParams({
    apikey: API_KEY, 
    q: 'Amsterdam',
  }).toString();
  return await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Encoding': 'gzip,deflate',
      },
    });
}

function getForecast() {
  return true;
}

function getCurrentWeather() {
  return true;
}

export default {
  getLocationKey,
}