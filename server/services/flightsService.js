// TODO implement

async function getFlights() {
  return [
    {
      cityFrom: 'Madrid',
      cityTo: 'Vilnius',
      dTimeUTC: 1599133800,
      aTimeUTC: 1599165900,
      fly_duration: '8h 55m',
      price: 37,
    },
  ];
}

async function getFlightLocations(query) {
  return ['DUB', 'KEK', 'VNO'];
}

exports.getFlights = getFlights;
exports.getFlightLocations = getFlightLocations;
