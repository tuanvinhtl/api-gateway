const path = require('path');
const gateway = require('express-gateway');

console.warn('api-gatway is on')

gateway()
  .load(path.join(__dirname, 'config'))
  .run();
