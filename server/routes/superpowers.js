var express = require('express');
var router = express.Router();
var pg = require('pg');

// var pool = require('../config/database-pool.js'); // Creates database pool, if you need to change database, do it in the config object in this file

var config = {
  database: 'phi',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 5000
};
var pool = new pg.Pool(config);


// return all super power names
router.get('/', function (req, res) {
  console.log('getting powers');
  pool.connect()
    .then(function (client) {
      client.query('SELECT * FROM super_powers ORDER BY name ASC')
        .then(function (result) {
          client.release();
          res.send(result.rows);
        })
        .catch(function (err) {
          console.log('error on SELECT', err);
          res.sendStatus(500);
        });
    });
});


module.exports = router;
