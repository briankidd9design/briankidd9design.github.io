$(document).ready(function(){
	
	$(".fade-right").animate({left:0, opacity:"show"}, 1000);
		
	 $('.fade, .lazy').slick({
		dots: true,
		infinite: true,
		speed:3000,
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		cssEase: 'linear',
		lazyLoad: 'ondemand'
	});
	 
    /* $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true
     });*/
		
			
	/*reviews section display counters*/
	
	var counter=1,counterBack=1;
	$(".clickBtn").click(function(){
		
		switch(counter){
			
			case 1:
			$(".review1").hide();
			$(".review2").show();
			$(".review3").hide();
			$(".review4").hide();
			$(".review5").hide();
			$(".review6").hide();
			$(".review7").hide();
			$(".review8").hide();
			$(".review9").hide();
			$(".review10").hide();
			counter++;
			counterBack=10;
			break;
			
			
			case 2:
			$(".review1").hide();
			$(".review2").hide();
			$(".review3").show();
			$(".review4").hide();
			$(".review5").hide();
			$(".review6").hide();
			$(".review7").hide();
			$(".review8").hide();
			$(".review9").hide();
			$(".review10").hide();
			counter++;
			counterBack=9;
			break;
				
			case 3:
			$(".review1").hide();
			$(".review2").hide();
			$(".review3").hide();
			$(".review4").show();
			$(".review5").hide();
			$(".review5").hide();
			$(".review7").hide();
			$(".review8").hide();
			$(".review9").hide();
			$(".review10").hide();
			counter++;
			counterBack=8;
			break;
			
			case 4:
			$(".review1").hide();
			$(".review2").hide();
			$(".review3").hide();
			$(".review4").hide();
			$(".review5").show();
			$(".review6").hide();
			$(".review7").hide();
			$(".review8").hide();
			$(".review9").hide();
			$(".review10").hide();
			counter++;
			counterBack=7;
			break;
			
			case 5:
			$(".review1").hide();
			$(".review2").hide();
			$(".review3").hide();
			$(".review4").hide();
			$(".review5").hide();
			$(".review6").show();
			$(".review7").hide();
			$(".review8").hide();
			$(".review9").hide();
			$(".review10").hide();
			counter++;
			counterBack=6;
			break;
			
				
			case 6:
			$(".review1").hide();
			$(".review2").hide();
			$(".review3").hide();
			$(".review4").hide();
			$(".review5").hide();
			$(".review6").hide();
			$(".review7").show();
			$(".review8").hide();
			$(".review9").hide();
			$(".review10").hide();
			counter++;
			counterBack=5;
			break;
			
				
			case 7:
			$(".review1").hide();
			$(".review2").hide();
			$(".review3").hide();
			$(".review4").hide();
			$(".review5").hide();
			$(".review6").hide();
			$(".review7").hide();
			$(".review8").show();
			$(".review9").hide();
			$(".review10").hide();
			counter++;
			counterBack=4;
			break;
			
				
			case 8:
			$(".review1").hide();
			$(".review2").hide();
			$(".review3").hide();
			$(".review4").hide();
			$(".review5").hide();
			$(".review6").hide();
			$(".review7").hide();
			$(".review8").hide();
			$(".review9").show();
			$(".review10").hide();
			counter++;
			counterBack=3;
			break;
			
			case 9:
			$(".review1").hide();
			$(".review2").hide();
			$(".review3").hide();
			$(".review4").hide();
			$(".review5").hide();
			$(".review6").hide();
			$(".review7").hide();
			$(".review8").hide();
			$(".review9").hide();
			$(".review10").show();
			counter++;
			counterBack=2;
			break;
				
			
			default:
			$(".review1").show();
			$(".review2").hide();
			$(".review3").hide();
			$(".review4").hide();
			$(".review5").hide();
			$(".review6").hide();
			$(".review7").hide();	
			$(".review8").hide();
			$(".review9").hide();
			$(".review10").hide();
			counter=1;
			counterBack=1;
			
		}
	
});	
		
	$(".clickBtnBack").click(function(){
		
	
		switch(counterBack){
			case 1:
			$(".review1").hide();
			$(".review2").hide();
			$(".review3").hide();
			$(".review4").hide();
			$(".review5").hide;
			$(".review6").hide();
			$(".review7").hide();	
			$(".review8").hide();
			$(".review9").hide();
			$(".review10").show();
			counterBack++;
			counter=10;
			break;
			
			case 2:
			$(".review1").hide();
			$(".review2").hide();
			$(".review3").hide();
			$(".review4").hide();
			$(".review5").hide();
			$(".review6").hide();
			$(".review7").hide();	
			$(".review8").hide();
			$(".review9").show();
			$(".review10").hide();
			counterBack++;
			counter=9;
			break;
			
			case 3:
			$(".review1").hide();
			$(".review2").hide();
			$(".review3").hide();
			$(".review4").hide();
			$(".review5").hide();
			$(".review6").hide();
			$(".review7").hide();	
			$(".review8").show();
			$(".review9").hide();
			$(".review10").hide();
			counterBack++;
			counter=8;
			break;
			
			case 4:
			$(".review1").hide();
			$(".review2").hide();
			$(".review3").hide();
			$(".review4").hide();
			$(".review5").hide();
			$(".review6").hide();
			$(".review7").show();	
			$(".review8").hide();
			$(".review9").hide();
			$(".review10").hide();
			counterBack++;
			counter=7;
			break;
			
			case 5:
			$(".review1").hide();
			$(".review2").hide();
			$(".review3").hide();
			$(".review4").hide();
			$(".review5").hide();
			$(".review6").show();
			$(".review7").hide();	
			$(".review8").hide();
			$(".review9").hide();
			$(".review10").hide();
			counterBack++;
			counter=6;
			break;
			
			case 6:
			$(".review1").hide();
			$(".review2").hide();
			$(".review3").hide();
			$(".review4").hide();
			$(".review5").show();
			$(".review6").hide();
			$(".review7").hide();	
			$(".review8").hide();
			$(".review9").hide();
			$(".review10").hide();
			counterBack++;
			counter=5;
			break;
			
			case 7:
			$(".review1").hide();
			$(".review2").hide();
			$(".review3").hide();
			$(".review4").show();
			$(".review5").hide();
			$(".review6").hide();
			$(".review7").hide();	
			$(".review8").hide();
			$(".review9").hide();
			$(".review10").hide();
			counterBack++;
			counter=4;
			break;
			
			case 8:
			$(".review1").hide();
			$(".review2").hide();
			$(".review3").show();
			$(".review4").hide();
			$(".review5").hide();
			$(".review6").hide();
			$(".review7").hide();	
			$(".review8").hide();
			$(".review9").hide();
			$(".review10").hide();
			counterBack++;
			counter=3;
			break;
			
			
			case 9:
			$(".review1").hide();
			$(".review2").show();
			$(".review3").hide();
			$(".review4").hide();
			$(".review5").hide();
			$(".review6").hide();
			$(".review7").hide();	
			$(".review8").hide();
			$(".review9").hide();
			$(".review10").hide();
			counterBack++;
			counter=1;
			break;
			
			default:
			$(".review1").show();
			$(".review2").hide();
			$(".review3").hide();
			$(".review4").hide();
			$(".review5").hide();
			$(".review6").hide();
			$(".review7").hide();	
			$(".review8").hide();
			$(".review9").hide();
			$(".review10").hide();
			counter=1;
			counterBack=1;
		
		}	
			
	});		
	
});