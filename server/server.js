// require express
// give us a function
const express = require('express');

// create an instance of express by calling function returned above
// gives us an object
const app = express();

const port = 5000;

// express static file serving
// folder name is server/public
app.use(express.static('server/public'));

// start up our server
app.listen(port, function() {
    console.log('listening on port', port);
});