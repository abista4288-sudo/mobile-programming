$(document).ready(function() {

    $("#qrButton").click(function() {

        if ($("#qrcode").is(":empty")) {

            let profileInfo = "Name: Aryan Bista\nBScIT Student\nLocation: Nepal";

            new QRCode(
                document.getElementById("qrcode"),
                profileInfo
            );

            $("#qrButton").text("Hide QR Code");

        } else {

            $("#qrcode").html("");

            $("#qrButton").text("Show QR Code");
        }

    });

});