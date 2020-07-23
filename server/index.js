'use strict';

import express from 'express';
// import socketIO from "socket.io";

import { router as weather } from './routes/weather';
import { router as flights } from './routes/flights';

export default (app, http) => {
  // app.use(express.json());

  app.use('/weather', weather);
  app.use('/flights', flights);
}
