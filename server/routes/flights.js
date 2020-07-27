const express = require('express');
const flightsService = require('../services/flightsService');

const router = express.Router();

router.get('/info', (req, res, next) => {
  flightsService.getFlights().then(info => res.json(info)).catch(next);
});

router.get('/locations', (req, res, next) => {
  flightsService.getFlightLocations(req.query.term)
    .then(locations => res.json(locations)).catch(next);
});

exports.router = router;
