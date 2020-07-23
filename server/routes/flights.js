import express from 'express';
import flightsService from '../services/flightsService';

export const router = express.Router();

router.get('/info', function (req, res) {
    flightsService.getFlights(req.place, response.dataResponse(res));
});