//Using quote API from https://forismatic.com
function randomQuote() {
 $.ajax({
      url: 'https://api.forismatic.com/api/1.0/',
   method: 'GET',
   jsonp: 'jsonp',
   dataType: 'jsonp',
   cache: false,
   data: {
     method: 'getQuote',
     format: 'jsonp',
     lang: 'en'
      },
   success: function(quoteResult) {    $('#text').html( quoteResult.quoteText)
 $('#author').html("- "+quoteResult.quoteAuthor)
                                  }
    });
}

//Load a quote when the page is opened
randomQuote();

//Click to get a new quote
$('#new-quote').on('click', (function() {
    randomQuote();
  }));

$('#tweet-quote').on('click', function() {
  var twitter = $('#text').text();
  var author = $('#author').text();
  window.open($(this).attr('href') + '?text=' + encodeURIComponent('"' + twitter + '"' + author)
  );
})