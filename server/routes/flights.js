const express = require('express');
const flightsService = require('../services/flightsService').default;

const router = express.Router();

router.get('/info', (req, res) => {
  flightsService.getFlights(req.place, res.dataResponse(res));
});

exports.router = router;