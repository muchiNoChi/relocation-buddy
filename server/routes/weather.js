const express = require('express');
const weatherService = require('../services/weatherService');

const router = express.Router();

router.get('/forecast/:locationKey', (req, res, next) => {
  weatherService.getForecast(req.params.locationKey)
    .then(forecast => res.json(forecast)).catch(next);
});

exports.router = router;
