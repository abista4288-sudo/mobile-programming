$(document).ready(function() {

    // -------------------------
    // GET & SET
    // -------------------------

    // Show Name
    $("#show-name").click(function() {
        let name = $("#student-name").text();
        $("#output").text(name);
    });

    // Change Name
    $("#change-name").click(function() {
        $("#student-name").text("Aryan Bista");
    });

    // Show Bio
    $("#show-bio").click(function() {
        let bio = $("#student-bio").html();
        $("#output").text(bio);
    });

    // Get Input
    $("#get-input").click(function() {
        let nickname = $("#nickname-input").val();
        $("#output").text(nickname);
    });

    // Set Input
    $("#set-input").click(function() {
        $("#nickname-input").val("jQuery Pro");
    });


    // -------------------------
    // CSS CLASSES
    // -------------------------

    // Highlight Card
    $("#highlight-card").click(function() {
        $("#profile-card").addClass("highlighted");
    });

    // Remove Highlight
    $("#remove-highlight").click(function() {
        $("#profile-card").removeClass("highlighted");
    });

    // Toggle Dark Mode
    $("#dark-mode").click(function() {
        $("#profile-card").toggleClass("dark-mode");
    });

    // Toggle Rounded
    $("#rounded").click(function() {
        $("#profile-photo").toggleClass("rounded");
    });


    // -------------------------
    // CSS METHOD
    // -------------------------

    // Red Background
    $("#red-bg").click(function() {
        $("#profile-card").css("background", "#e74c3c");
    });

    // Reset Background
    $("#reset-bg").click(function() {
        $("#profile-card").css("background", "white");
    });


    // -------------------------
    // HIDE & SHOW
    // -------------------------

    // Hide Photo
    $("#hide-photo").click(function() {
        $("#profile-photo").hide("slow");
    });

    // Show Photo
    $("#show-photo").click(function() {
        $("#profile-photo").show("slow");
    });

    // Toggle Bio
    $("#toggle-bio").click(function() {
        $("#student-bio").toggle();
    });


    // -------------------------
    // FADE
    // -------------------------

    // Fade Out Card
    $("#fade-out").click(function() {
        $("#profile-card").fadeOut();
    });

    // Fade In Card
    $("#fade-in").click(function() {
        $("#profile-card").fadeIn();
    });

    // Fade to 50%
    $("#fade-50").click(function() {
        $("#profile-card").fadeTo("slow", 0.5);
    });


    // -------------------------
    // SLIDE
    // -------------------------

    // Slide Up Skills
    $("#slide-up").click(function() {
        $("#skills-list").slideUp();
    });

    // Slide Down Skills
    $("#slide-down").click(function() {
        $("#skills-list").slideDown();
    });

    // Slide Toggle Skills
    $("#slide-toggle").click(function() {
        $("#skills-list").slideToggle();
    });


    // -------------------------
    // ANIMATE
    // -------------------------

    $("#animate-card").click(function() {

        $("#profile-card")
            .animate({
                marginLeft: "200px"
            }, 1000)
            .animate({
                marginLeft: "0px"
            }, 1000);

    });


    // -------------------------
    // EVENTS
    // -------------------------

    // Mouse hover on photo
    $("#profile-photo").mouseenter(function() {
        $("#profile-photo").addClass("shadow");
    });

    $("#profile-photo").mouseleave(function() {
        $("#profile-photo").removeClass("shadow");
    });


    // Key pressed in input
    $("#nickname-input").keydown(function(event) {
        $("#output").text(event.key);
    });

});