const express = require('express');
const app = express();

const { PORT } = require('./config/serverConfig.js');

const prepareAndStartServer = () => { 
  try {
    app.listen(PORT, () => { 
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.error(`Failed to start server: ${error.message}`);
  }
};

// Call the function to start the server
prepareAndStartServer();
