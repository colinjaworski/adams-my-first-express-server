// require express
// give us a function
const express = require('express');
const bodyParser = require('body-parser');

// create an instance of express by calling function returned above
// gives us an object
const app = express();

const port = 5000;

app.use(bodyParser.urlencoded({ extended: true })); // application is using body-parser to parse data sent from the client.

// express static file serving
// folder name is server/public
app.use(express.static('server/public'));

// let quoteList = [
//     // { text: 'I\'m not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.', author: 'Emma Watson' },
//     // { text: 'Remember there\'s no such thing as a small act of kindness. Every act creates a ripple with no logical end.', author: 'Scott Adams' },
//     // { text: 'Intelligence plus character-that is the goal of true education.', author: 'Martin Luther King, Jr.' }
//   ];

  const quoteList = require('./modules/quoteList')
  // when we visit localHost:5000/quotes in our browser, express will call this function
  // req is request and response is res
  app.get('/quotes', function(req, res){
    console.log('request at /quotes was made', req.body);
    res.send(quoteList);
  })

  app.post('/quotes', (req,res) => {
    // The data (body) sent from the client is saved for us
    // in `req.body`
    // Note that without bodyParser setup, req.body will be undefined!
    console.log(`Get a POST request!`, req.body);

    // Grab the new quote from the request body
    let quote = req.body;

    // Push the quote into our array
    console.log(`Adding new quote: `, quote)
    quoteList.push(quote);

    // Send back a status code of 201
    res.sendStatus(201);
});

// start up our server
app.listen(port, function() {
    console.log('listening on port', port);
});