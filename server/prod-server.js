const express = require('express');
const path = require('path');
const addRoutes = require('./index').default;

const app = express();

addRoutes(app);
app.use('/', express.static(path.join(__dirname, '../dist')));

app.listen(process.env.PORT || 3000);
