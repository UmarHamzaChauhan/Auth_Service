const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig.js');
const apiRoutes = require('./routes/index.js');

const prepareAndStartServer = () => { 
  const app = express();

  // Middleware for parsing JSON and URL-encoded data
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // Mount API routes
  app.use('/api', apiRoutes);

  // Start the server
  app.listen(PORT, () => { 
    console.log(`Server started on port ${PORT}`);
  });
};

// Call the function to start the server
prepareAndStartServer();
