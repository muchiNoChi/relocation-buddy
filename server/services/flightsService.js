// TODO implement

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
  ];
}

async function getFlightLocations(query) {
  return ['DUB', 'KEK', 'VNO'];
}

exports.getFlights = getFlights;
exports.getFlightLocations = getFlightLocations;
