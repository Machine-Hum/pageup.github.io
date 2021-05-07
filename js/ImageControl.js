/* 
Walker
 */

$(document).ready(function() { 
    $("#image-seqstp1").delay(2000).animate({"opacity": "1"}, 700); 
});

$(document).ready(function(){
    $("button").click(function()
    {
        $(this).delay(250).animate({"height": "700"}, 700);
        $(this).delay(250).animate({"width": "900"}, 700);
        $(this).css("text-align", "left");
    });
});