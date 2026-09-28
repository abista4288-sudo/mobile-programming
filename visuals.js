$(document).ready(function() {

    $("#start").click(function() {

        $("#box").animate({
            top: "250px",
            left: "0px"
        }, 1000, function() {
            $("#box").css("background-color", "blue");
        });

        $("#box").animate({
            top: "250px",
            left: "350px"
        }, 1000, function() {    
            $("#box").css("background-color", "green");
        });

        $("#box").animate({
            top: "0px",
            left: "350px"
        }, 1000, function() {
            $("#box").css("background-color", "orange");
        });

        $("#box").animate({
            top: "0px",
            left: "0px"
        }, 1000, function() {
            $("#box").css("background-color", "red");
        });

    });

});