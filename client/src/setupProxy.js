const proxy = require('http-proxy-middleware');
const target = process.env.REACT_PROXY || 'http://localhost:3000/';

module.exports = function(app) {
  app.use(proxy('/api', { target }));
};
