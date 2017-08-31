$(function() {

  // your code will go here

  $.ajax({
    url: 'https://www.codeschool.com/users/iistudio.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
    }
  });


});
