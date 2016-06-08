$( document ).ready(function(){
   $(".button-collapse").sideNav();
   $('.slider').slider({full_width: true});


  $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - 60
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});


});


$(window).scroll(function(){
  $(".mainwords").css("opacity", 1 - $(window).scrollTop() / 250);
});
