$(document).ready(function(){

    //Menu Icon slide toggle and change from hamburger to 'x'
    $("#slide").click(function(){
        $("#hidden").slideToggle("slow");
    });
    var menuCounter = 0;
    $("#menuIcon").click(function(){
        if(menuCounter == 0){
            $("#menuIcon").fadeOut(function() {
                $(this).html("&#9747")
            }).fadeIn();
            menuCounter++;
        }
        else if(menuCounter == 1){
            $("#menuIcon").fadeOut(function() {
                $(this).html("&#9776")
            }).fadeIn(); 
            menuCounter--;
        }
    });
});