$(document).ready(function() {

    $("#show-name").click(function() {
        let name = $("#student-name").text();
        $("#output").text(name);
    });

    $("#change-name").click(function() {
        $("#student-name").text("Aryan Bista");
    });

    $("#show-bio").click(function() {
        let bio = $("#student-bio").html();
        $("#output").text(bio);
    });

    $("#get-input").click(function() {
        let nickname = $("#nickname-input").val();
        $("#output").text(nickname);
    });
    
    $("#set-input").click(function() {
        $("#nickname-input").val("jQuery Pro");
    });
   
    $("#highlight-card").click(function() {
        $("#profile-card").addClass("highlighted");
    });

    $("#remove-highlight").click(function() {
        $("#profile-card").removeClass("highlighted");
    });

    $("#dark-mode").click(function() {
        $("#profile-card").toggleClass("dark-mode");
    });


    $("#rounded").click(function() {
        $("#profile-photo").toggleClass("rounded");
    });


    $("#red-bg").click(function() {
        $("#profile-card").css("background", "#e74c3c");
    });

    $("#reset-bg").click(function() {
        $("#profile-card").css("background", "white");
    });

    $("#hide-photo").click(function() {
        $("#profile-photo").hide("slow");
    });

    $("#show-photo").click(function() {
        $("#profile-photo").show("slow");
    });
    $("#toggle-bio").click(function() {
        $("#student-bio").toggle();
    });

    $("#fade-out").click(function() {
        $("#profile-card").fadeOut();
    });
    $("#fade-in").click(function() {
        $("#profile-card").fadeIn();
    });
    $("#fade-50").click(function() {
        $("#profile-card").fadeTo("slow", 0.5);
    });

    $("#slide-up").click(function() {
        $("#skills-list").slideUp();
    });

    $("#slide-down").click(function() {
        $("#skills-list").slideDown();
    });
    $("#slide-toggle").click(function() {
        $("#skills-list").slideToggle();
    });
    $("#animate-card").click(function() {

        $("#profile-card")
            .animate({
                marginLeft: "200px"
            }, 1000)
            .animate({
                marginLeft: "0px"
            }, 1000);

    });
    $("#profile-photo").mouseenter(function() {
        $("#profile-photo").addClass("shadow");
    });

    $("#profile-photo").mouseleave(function() {
        $("#profile-photo").removeClass("shadow");
    });
    $("#nickname-input").keydown(function(event) {
        $("#output").text(event.key);
    });

});