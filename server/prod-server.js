const express = require('express');
const cors = require('cors');
const path = require('path');
const { env } = require('process');
const addRoutes = require('./index').default;

const { HOST_NAME } = env;

const app = express();

app.use(cors({
  origin: HOST_NAME || '*',
}));
addRoutes(app);
app.use('/', express.static(path.join(__dirname, '../dist')));
app.use('*', (_req, res) => res.sendFile(path.join(__dirname, '../dist', 'index.html')));

app.listen(process.env.PORT || 3000);
