const dotenv = require('dotenv');

dotenv.config();

console.log('Loaded PORT:', process.env.PORT);

module.exports = {
  PORT: process.env.PORT || 3001,
};
