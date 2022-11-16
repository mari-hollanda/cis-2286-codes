/*
Name: Marianna Hollanda Campos Pedroso
Date: March 26, 2021
Purpose: CIS-2286, Practical 2
*/

window.addEventListener("load", function () {
    document.getElementById("myTa").focus();
    document.getElementById("submitButton").addEventListener("click", applyFormatting);
    document.getElementById("resetButton").addEventListener("click", resetForm);
    checkLength();
});

/*
* function to check the length of the textarea
*/
function checkLength() {
    let myTa = document.getElementById("myTa").value;
    if (myTa.value.length > 70) {
        myTa.value = name.value.slice(0, 70);
    }

    let output = "";
    let textLenOutput = document.getElementById('myTa').value;

    if (textLenOutput > 70) {
        document.getElementById("myTa").disabled = true;
    }

    if (textLenOutput >= 0 && textLenOutput <= 40) {
        document.getElementById("outputDiv").style.color = "green";
    } else if (textLenOutput >= 41 && textLenOutput <= 60) {
        document.getElementById("outputDiv").style.color = "orange";
    } else {
        document.getElementById("outputDiv").style.color = "red";
    }

    document.getElementById("outputDiv").innerHTML = output;

}

/*
* function to apply the formatting of the textarea
*/
function applyFormatting() {
    let format = document.getElementById("fontChoice");
    if (document.getElementById("fontChoice").value("Arial")) {
        format.style.fontFamily = "Arial";
    } else if (document.getElementById("fontChoice").value("Verdana")) {
        format.style.fontFamily = "Verdana";
    } else if (document.getElementById("fontChoice").value("Anton")) {
        format.style.fontFamily = "Anton";
    } else if (document.getElementById("fontChoice").value("Comic Sans MS")) {
        format.style.fontFamily = "Comic Sans MS";
    }

    let color = document.getElementById("colorChoice");
    if (document.getElementById("colorChoice").value("blue")) {
        color.style.color = "blue";
    } else if (document.getElementById("colorChoice").value("red")) {
        color.style.color = "red";
    } else if (document.getElementById("colorChoice").value("green")) {
        color.style.color = "green";
    }

    let size = document.getElementById("textSize");
    if (document.getElementById("textSize").value("20")) {
        size.style.fontSize = "20px";
    } else if (document.getElementById("textSize").value("40")) {
        size.style.fontSize = "40px";
    } else if (document.getElementById("textSize").value("50")) {
        size.style.fontSize = "50px";
    }

}

/*
* function to reset the form
*/
function resetForm() {
    document.getElementById("resetButton").reset();
    document.getElementById("outputDiv").style.display = "none";

}
