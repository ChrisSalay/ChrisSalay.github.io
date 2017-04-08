$(document).ready(function() {
	$('#fullpage').fullpage({
	    navigation: true,
	    navigationTooltips:['Introduction','Hi I am Riva','Follow me','Contact me'],
	    showActiveTooltip: true,
	    afterLoad: function(anchorLink, index){
	    	var loadedSection = $(this);
	    	
	    		/*if(index == 1){
		    		$("#fp-nav ul li a span, .fp-slidesNav ul li a span").animate({
	    				backgroundColor : 'white'
	    			}); */
	    			
	    			switch(index){
	    				
	    				case 1:
	    				$("#fp-nav ul li a span, .fp-slidesNav ul li a span").animate({
	    					backgroundColor : 'white'
	    				});
	    				$("nav").animate({backgroundColor: 'black'});
	    				$("#fp-nav ul li .fp-tooltip").animate({color:'#fff'});
	    				break;
	    				
	    				case 2:
	    					$("nav").animate({backgroundColor: 'rgba(191,186,191,0.7)'});
	    					$("#hello h1").slideDown();
	    					$("#hello h2").fadeIn();
	    					$("#fp-nav ul li .fp-tooltip").animate({color:'#fff'});
	    				break;
	    				
	    				case 3:
	    					$("#follow_riva i.fa.fa-twitter-square.fa-5x").fadeIn("slow",function(){
	    						$("#follow_riva i.fa.fa-facebook-square.fa-5x").fadeIn("slow", function(){
	    							$("#follow_riva i.fa.fa-instagram.fa-5x").fadeIn("slow");
	    						});
	    					});
	    					$("#fp-nav ul li .fp-tooltip").animate({color:'#fff'});
    					break;
    					
    					case 4:
    						$("nav").animate({backgroundColor: 'black'});
    						$("#fp-nav ul li .fp-tooltip").animate({color:'black'});
    					break;
	    				
	    			}
	    			
	    			

	    	} // end of after load
	});
	
	try{
		Typekit.load({ async: true });
	}
	catch(e){}
	
	$("i.fa.fa-bars.fa-5x").click(function(){
			$("#menu").fadeIn(500);
		}); // end of click event
		
	$("i.fa.fa-times.fa-5x").click(function(){
			$("#menu").fadeOut(500);
		}); // end of click event
 }); // end of document.ready()
