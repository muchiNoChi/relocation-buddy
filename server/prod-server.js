const express = require('express');
const path = require('path');
const addRoutes = require('./index').default;
const history = require('connect-history-api-fallback');

const app = express();

app.use(history());

addRoutes(app);
app.use('/', express.static(path.join(__dirname, '../dist')));

app.listen(process.env.PORT || 3000);
