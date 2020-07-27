const { getCurrentWeather } = require('./weatherService');

const CITIES = [
  {
    locationName: 'Amsterdam',
    locationCode: 'AMS',
    locationKey: 249758,
    officesCount: 2,
    phoneNumber: '+31-655-5390-91',
  },
  {
    locationName: 'Madrid',
    locationCode: 'MAD',
    locationKey: 308526,
    officesCount: 1,
    phoneNumber: '+34-655-5424',
  },
  {
    locationName: 'Budapest',
    locationCode: 'BUD',
    locationKey: 187423,
    officesCount: 1,
    phoneNumber: '+36-205-5543-75',
  },
];

async function getCities() {
  return Promise.all(CITIES.map(async city => ({
    ...city,
    currentWeather: await getCurrentWeather(city.locationKey),
  })));
}

async function getCity(name) {
  // arrray will be non-empty as city name belongs to city from cities list itself
  return CITIES.find(city => city.locationName === name);
}

exports.getCities = getCities;
exports.getCity = getCity;
