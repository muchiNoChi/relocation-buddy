const fetch = require('node-fetch');

// TODO move to service
async function fetchData(url, ...params) {
  return fetch(url, params).then(res => res.json());
}

async function getFlights(params) {
  const url = new URL('https://api.skypicker.com/flights');
  url.search = new URLSearchParams({
    fly_from: params.flyFrom,
    fly_to: params.flyTo,
    date_from: params.dateFrom,
    date_to: params.dateTo,
    // TODO can extract this to client
    max_fly_duration: 10,
    adults: 1,
    // TODO add currency switcher
    curr: 'EUR',
    partner: 'picky',
    price_from: 1,
    price_to: 1000,
    sort: 'price',
    asc: 1,
  }).toString();
  return fetchData(url)
    .then(res => (res.data || []).map((flight, idx) => ({ ...flight, id: idx })));
}

async function getFlightLocations(term) {
  const url = new URL('https://api.skypicker.com/locations');
  url.search = new URLSearchParams({
    term,
    locale: 'en-US',
    location_types: 'airport',
    active_only: true,
    sort: 'name',
  }).toString();
  return fetchData(url).then(data => data.locations && data.locations.map(location => location.id));
}

exports.getFlights = getFlights;
exports.getFlightLocations = getFlightLocations;
exports.fetchData = fetchData;
