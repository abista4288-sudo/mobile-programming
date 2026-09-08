let button = document.getElementById("addButton");

button.addEventListener("click", function() {

    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);

    let answer = number1 + number2;

    document.getElementById("result").innerHTML = answer;
});