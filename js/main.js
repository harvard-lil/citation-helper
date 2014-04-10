$('form').submit(function() {

	var original_url = $('#original_url').val();
	
	var matches = original_url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
	var stripped_url = matches && matches[1];

	var request = $.ajax({
        url: "http://textance.herokuapp.com/title/" + stripped_url,
        complete: function(data) {
			$('#example_container').fadeIn('slow');
			$('.title_holder').text(data.responseText);
			$('.pretty_date_holder').text(moment().format('MMM D, YYYY'));
			$('.date_holder').text(moment().format());
			$('.url_holder').text(original_url);			
        }
	  });
	
	return false;
});