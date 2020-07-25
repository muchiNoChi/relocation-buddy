async function getOfficesInfo() {
  return [
    {
      locationName: 'Amsterdam',
      locationCode: 'AMS',
      locationKey: 249758,
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
      currentWeather: {
        weatherText: 'Rain',
        weatherIcon: 18,
        temperature: 21.1,
      },
    },
  ];
}

exports.getOfficesInfo = getOfficesInfo;
