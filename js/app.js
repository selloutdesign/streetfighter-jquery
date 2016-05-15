$(document).ready(function() {

	function playHadouken () {
	  $('#hadouken-sound')[0].volume = 0.5;
	  $('#hadouken-sound')[0].load();
	  $('#hadouken-sound')[0].play();
	}

	$('.ryu').mouseenter(function() {
		/* Act on the event */
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function(event) {
		/* Act on the event */
		$('.ryu-ready').hide();
		$('.ryu-still').show();
		
	})
	.mousedown(function(event) {
		/* Act on the event */
		playHadouken();
		$('.ryu-ready').hide();
  		$('.ryu-throwing').show();
  		$('.hadouken').finish().show()
  		.animate(
  			{'left': '1020px'},
  			500,
  			function() {
  				$(this).hide();
  				$(this).css('left', '520px');
  			}
  			);

	})
	.mouseup(function(event) {
		/* Act on the event */
		$('.ryu-throwing').hide();
		$('.hadouken').hide();
  		$('.ryu-ready').show();
	});
	
	$(window).keydown(function(event) {
		/* Act on the event */
		if (event.which == 88){
		$('.ryu-ready').hide();
		$('.ryu-still').hide();
  		$('.ryu-throwing').hide();
  		$('.ryu-cool').show();	
		}
	})
	.keyup(function(event) {
		/* Act on the event */
		if(event.which == 88){
			$('.ryu-cool').hide();
	  		$('.ryu-throwing').hide();
	  		$('.ryu-ready').hide();
	  		$('.ryu-still').show();
		}
	});


});