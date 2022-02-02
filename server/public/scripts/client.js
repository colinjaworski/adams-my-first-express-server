$(document).ready(onReady);

function onReady() {
  getQuotes();
    $('#send-button').on('click', addQuote);
}

function getQuotes() {
  // Get quotes from server - AJAX!
  $.ajax({
    method: 'GET',
    url: '/quotes',
  }).then(function(response) {
      console.log("SUCCESS!!!", response);
      // TODO - append quotes to the dom
      renderToDom(response);
  }).catch(function(response) {
      // notify the user
      alert('Request failed. Try again later.');
    }
  );
}




  function renderToDom(quotes) {
      $('#output').empty();
      for (let quote of quotes) {
          $('#output').append(`
          <p>${quote.text}, <i>${quote.author}</i></p>
          `);
      }
  }

  function addQuote() {
      $.ajax({
        method: 'POST', // a type of request
        url: '/quotes',  // route we will match on
        data: { // must be an object
                text: $('#quote-input').val(),
                author: $('#author-input').val()
        }
      }).then(function(response){
          console.log('look at us now! HURRAH!', response);
          getQuotes(); // to refresh the DOM with a new quote
      }).catch(function(response){
          console.log('UUUUUHHHGGG', response);
      })
  }