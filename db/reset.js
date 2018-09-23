const db = require('../server/database');
const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'data.sql'), 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return process.exit(1);
  }

  const queries = data
    .split(';')
    .map(query => query.trim())
    .filter(query => !!query);

  executeAll(queries);
});

function executeAll(queries) {
  query = `${queries.shift()};`;
  console.debug('running', query);

  db.query(query, err => {
    if (err) {
      console.error(err);
      return process.exit(1);
    }

    if (queries.length === 0) {
      console.log('all queries executed');
      return process.exit(0);
    }

    executeAll(queries);
  });
}
