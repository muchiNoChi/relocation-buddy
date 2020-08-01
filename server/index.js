const { router: cities } = require('./routes/cities');
const { router: weather } = require('./routes/weather');
const { router: flights } = require('./routes/flights');

function redirectUnmatched(_req, res) {
  res.redirect('/');
}

exports.default = (app) => {
  app.use('/cities', cities);
  app.use('/weather', weather);
  app.use('/flights', flights);
  app.use(redirectUnmatched);
};
