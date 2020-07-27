const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');
const addRoutes = require('./index').default;

const app = express();

app.use(history({
  rewrites: [
    {
      from: /^\/server\/.*$/,
      to: context => context.parsedUrl.path,
    },
  ],
}));

addRoutes(app);
app.use('/', express.static(path.join(__dirname, '../dist')));

app.listen(process.env.PORT || 3000);
