const historyFallback = require('connect-history-api-fallback');

const { router: weather } = require('./routes/weather');
const { router: flights } = require('./routes/flights');

exports.default = (app) => {
  // app.use(express.json());

  app.use(historyFallback());

  app.use('/weather', weather);
  app.use('/flights', flights);
};
