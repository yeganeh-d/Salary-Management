
//   
(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

})(jQuery);

////
///toggle filter
let toggle = document.querySelector(".toggle");
let toggle2 = document.querySelector(".toggle2");

function AnimatedToggle(){
    toggle.classList.toggle("active");
}
function AnimatedToggle2(){
    toggle2.classList.toggle("active");
}

///calendar
jalaliDatepicker.startWatch();

