const express = require('express');
const weatherService = require('../services/weatherService').default;

const router = express.Router();

router.get('/locationKey', function (req, res) {
    weatherService.getLocationKey(req.place, response.dataResponse(res));
});

exports.router = router;