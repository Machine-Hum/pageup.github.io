/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var pageNum = 0;

$('#next').click(function () {
    if(pageNum !== 4)
        pageNum++;
    update();
});

$('#previous').click(function () {
    if(pageNum !== 0)
        pageNum--;
    update();
});

function update(){
    
    if(pageNum === 0)
    {
        $("#text0").delay(100).animate({"opacity": "1"}, 700); 
        $("#text1").delay(100).animate({"opacity": "0"}, 700);
    }
    
    else if(pageNum === 1)
    {
        $("#text0").delay(100).animate({"opacity": "0"}, 700);
        $("#text1").delay(100).animate({"opacity": "1"}, 700);
        $("#text2").delay(100).animate({"opacity": "0"}, 700);
        
    }
    
    else if(pageNum === 2)
    {
        $("#text1").delay(100).animate({"opacity": "0"}, 700);
        $("#text2").delay(100).animate({"opacity": "1"}, 700);
        $("#text3").delay(100).animate({"opacity": "0"}, 700);
    }
    
    else if(pageNum === 3)
    {
        $("#text2").delay(100).animate({"opacity": "0"}, 700);
        $("#text3").delay(100).animate({"opacity": "1"}, 700);
        $("#text4").delay(100).animate({"opacity": "0"}, 700);
    }
    
    else if(pageNum === 4)
    {
        $("#text3").delay(100).animate({"opacity": "0"}, 700);
        $("#text4").delay(100).animate({"opacity": "1"}, 700);
    }
}