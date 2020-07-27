const fetch = require('node-fetch');

// TODO move to service
async function fetchData(url, ...params) {
  return fetch(url, params).then(res => res.json());
}

async function getFlights() {
  return [
    {
      id: 1,
      cityFrom: 'Madrid',
      cityTo: 'Vilnius',
      dTimeUTC: new Date(1599133800).toISOString(),
      aTimeUTC: new Date(1599165900).toISOString(),
      fly_duration: '8h 55m',
      price: 37,
    },
    {
      id: 2,
      cityFrom: 'Madrid',
      cityTo: 'Amsterdam',
      dTimeUTC: new Date(1599133800).toISOString(),
      aTimeUTC: new Date(1599165900).toISOString(),
      fly_duration: '3h 20m',
      price: 40,
    },
    {
      id: 3,
      cityFrom: 'Madrid',
      cityTo: 'Amsterdam',
      dTimeUTC: new Date(1599133800).toISOString(),
      aTimeUTC: new Date(1599165900).toISOString(),
      fly_duration: '3h 20m',
      price: 40,
    },
  ];
}

async function getFlightLocations(term) {
  return fetchData(`https://api.skypicker.com/locations?term=${term}&locale=en-US&location_types=airport&active_only=true&sort=name`).then(data => {
    return data.locations && data.locations.map(location => location.id);
  });
}

exports.getFlights = getFlights;
exports.getFlightLocations = getFlightLocations;
exports.fetchData = fetchData;
