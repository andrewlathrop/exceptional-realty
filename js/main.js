$(function() {

	////// Mobile Menu ///////

	$('a.menu-icon').click(function(){
		$('#menu-link').slideToggle();
	})

	// fix hidden links on window resize 

	$(window).resize(function() {
		if ($(window).width() > 700) {
			$('#menu').removeAttr('style')
		}
	})

})