const express = require('express');
const citiesService = require('../services/citiesService');

const router = express.Router();

router.get('/info', (req, res, next) => {
  citiesService.getCities().then(info => res.json(info)).catch(next);
});

router.get('/info/:name', (req, res, next) => {
  citiesService.getCity(req.params.name).then(info => res.json(info)).catch(next);
});

exports.router = router;
