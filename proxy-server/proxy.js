const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config({path: './.env'})

const PORT = process.env.PORT || 5000;

const mockedResponse = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
  "honeydew",
  "kiwi",
  "lemon"
];

// This little app simmulates a web api gateway for demostration porpouses.
app
  .use(express.static(path.join(__dirname, '..', 'dist')))

  /* Instead of a get() method, this can be changed by a use() method 
   * to prepare a proxy middleware and forward the request to the desire host.
   * A solution based in nginx would be a much interesting one for production environments.
   */
  .get('/searcher/autocomplete-options', (req, res) => {
    if (req.query.search) {
      console.log('Made search for', req.query.search);
    };

    res.json(mockedResponse);
  })

  .listen(PORT, '0.0.0.0', () => console.log(`Server initialized. Listening on ${ PORT }`));