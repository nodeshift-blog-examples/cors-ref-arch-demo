'use strict';

const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const app = express();

// Comment Out below to enable CORS
// app.use(cors());

app.get('/greeting', (req, res) => {
  res.send('Hi');
});

app.get('/', (req, res) => {
   res.send('Hello, World!');
});

app.listen(PORT, () => {
   console.log(`Server listening on port ${PORT}`);
});
