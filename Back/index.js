const http = require('http');
const express = require('express');
const cors = require('cors');

const catalog = require('./phones.json');
const MSMongo = require('./mongo-ms.js');

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

new MSMongo('/ms', app);

app.get('/phones', async (req, res) => {
  try {
    res.json(catalog);
  } catch (err) {
    console.error(err.message);
  }
});

server.listen(3001, function () {
  console.log(`server is starting on port 3001`);
});