'use strict';

import historyFallback from 'connect-history-api-fallback';

import { router as weather } from './routes/weather';
import { router as flights } from './routes/flights';

export default (app, http) => {
  // app.use(express.json());

  app.use(historyFallback());

  app.use('/weather', weather);
  app.use('/flights', flights);
}
