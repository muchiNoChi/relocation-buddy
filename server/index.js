const historyFallback = require('connect-history-api-fallback');

const { router: offices } = require('./routes/offices');
const { router: weather } = require('./routes/weather');
const { router: flights } = require('./routes/flights');

exports.default = (app) => {
  // app.use(express.json());

  // app.use(historyFallback()); <<<< - вот ето все портит

  app.use('/offices', offices);
  app.use('/weather', weather);
  app.use('/flights', flights);
};
