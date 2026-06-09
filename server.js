const express = require('express');
const { handleLcmRequest } = require('./lcm');

const app = express();
const PORT = process.env.PORT || 3000;

const EMAIL_SLUG = 'rolandybyr_gmail_com';

app.get(`/${EMAIL_SLUG}`, (req, res) => {
  const { x, y } = req.query;
  res.type('text/plain').send(handleLcmRequest(x, y));
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));