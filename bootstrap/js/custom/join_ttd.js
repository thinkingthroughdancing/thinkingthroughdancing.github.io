$(document).ready(function() {
	$.fn.gotoAnchor = function(anchor) {
    location.href = this.selector;
	}
    
    $("#app_button").click(function(){
    	$("#instructions").addClass("display-block");
    	$("#instructions").removeClass("display-none");
    	$('#instructions').gotoAnchor();
        $('#background').css("height","42.5vw");

    })

    $("#app_button2").click(function(){
    	$("#instructions").addClass("display-block");
    	$("#instructions").removeClass("display-none");
    	$('#instructions').gotoAnchor();
        $('#background').css("height","42.5vw");
    })

});