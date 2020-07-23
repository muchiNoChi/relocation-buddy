import express from 'express';
import weatherService from '../services/weatherService';

export const router = express.Router();

router.get('/locationKey', function (req, res) {
    weatherService.getLocationKey(req.place, response.dataResponse(res));
});
