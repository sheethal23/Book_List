"use strict";
$(document).ready(function() {
	//preload images
/*	var slider = $("#categories");
	var i,link,image;
	for (i=0; i<slider.length; i++)
	{
		link = slider[i];
		image = new Image();
		image.src = link.getAttribute("href");
	}
*/	
	$("#categories h2, a ").each(function() {
	     var booklist = new Image();
        booklist.src = $(this).attr("href");
    });
	
    $("#categories h2, a ").click(function(evt) {
    	var linkURL = $(this).attr("href");
        $("#image").attr("src", linkURL);
		
        $(this).toggleClass("minus");
        if ($(this).attr("class") !== "minus") {
            $(this).next().hide();
        }
        else {
            $(this).next().show();
        }
        evt.preventDefault();
    }); // end click
    $("#categories h2, a ").find().focus();
}); // end ready