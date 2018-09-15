const express = require('express');

const db = require('./database');

const router = express.Router();

router.get('/', (req, res) => {
  db.query('SELECT * FROM data;', (err, { rows }) => {
    if (err) {
      return res.sendStatus(500);
    }
    res.send(rows[0]);
  });
});

module.exports = router;
