   //script for slider

$(document).ready(function(){
		
		$(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true
		});
		
		$(".regular").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
		autoplay: false,
		slidesToShow: 3,
        slidesToScroll: 3
		});
		
    });