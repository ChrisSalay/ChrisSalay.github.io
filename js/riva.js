$(document).ready(function() {
	$('#fullpage').fullpage({
	    navigation: true,
	    navigationTooltips:['Introduction','Hi I am Riva','Contact me','Follow me']
	});
	
	try{
		Typekit.load({ async: true });
	}
	catch(e){}
});