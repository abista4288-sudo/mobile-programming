$(document).ready(function() {

    $("#qrButton").click(function() {

        let profileInfo = "Name: Aryan Bista\nBScIT Student\nLocation: Nepal";

        $("#qrcode").html("");

        new QRCode(
            document.getElementById("qrcode"),
            profileInfo
        );

    });

});