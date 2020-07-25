const express = require('express');
const officesService = require('../services/officesService');

const router = express.Router();

router.get('/info', (req, res, next) => {
  officesService.getOfficesInfo().then(info => res.json(info)).catch(next);
});

exports.router = router;
