
var maxWidth = $(window).width();
var maxHeight = $(window).height();

$(document).ready(function() {
	$('#fullpage').fullpage({
	    navigation: true,
	    navigationTooltips:['Introduction','Hi I am Riva','Contact me','Follow me']
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