const CITIES = [
  {
    locationName: 'Amsterdam',
    locationCode: 'AMS',
    locationKey: 249758,
    officesCount: 2,
    phoneNumber: '+31-655-5390-91',
    currentWeather: {
      weatherText: 'Mostly cloudy',
      weatherIcon: 6,
      temperature: 17.8,
    },
  },
  {
    locationName: 'Madrid',
    locationCode: 'MAD',
    locationKey: 308526,
    officesCount: 1,
    phoneNumber: '+34-655-5424',
    currentWeather: {
      weatherText: 'Sunny',
      weatherIcon: 1,
      temperature: 34.2,
    },
  },
  {
    locationName: 'Budapest',
    locationCode: 'BUD',
    locationKey: 187423,
    officesCount: 1,
    phoneNumber: '+36-205-5543-75',
    currentWeather: {
      weatherText: 'Rain',
      weatherIcon: 18,
      temperature: 21.1,
    },
  },
];

async function getCities() {
  return CITIES;
}

async function getCity(name) {
  // arrray will be non-empty as city name belongs to city from cities list itself
  return CITIES.find(city => city.locationName === name);
}

exports.getCities = getCities;
exports.getCity = getCity;
