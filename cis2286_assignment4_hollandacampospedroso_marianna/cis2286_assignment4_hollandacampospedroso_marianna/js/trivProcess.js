/*
Name: Marianna Hollanda Campos Pedroso
Date: March 15, 2021
Purpose: CIS-2286, Assignment 4
*/


//window.onload = init();
window.addEventListener("load", initiate, false);

/*
Function to load event listeners on windowload
*/
function initiate() {
    document.getElementById("submitButton").addEventListener('click', function (event) {
        event.preventDefault();

        if (checkInitiate()) {
            calculate();
        }
    });
}

/*
Function that is called when submit button is pressed to check if the users filled out every field.
*/
function checkInitiate() {

    let scarletWitch = checkTextField(document.getElementById("scarletWitchName"), document.getElementById("scarletWitchError"));
    let blackPanther = checkTextField(document.getElementById("blackPantherName"), document.getElementById("blackPantherError"));
    let doctorStrange = checkQuantity(document.getElementById("doctorStrange"), document.getElementById("doctorStrangeError"));
    let alienRace = checkQuantity(document.getElementById("alienRace"), document.getElementById("alienRaceError"));

    let city = document.getElementsByName("city");
    let cityCheck = false;
    for (let i = 0; i < city.length; i++) {
        if (city[i].checked) {
            cityCheck = true;
        }
    }
    if (cityCheck) {
        document.getElementById("cityError").style.display = "none";
    } else {
        document.getElementById("cityError").style.display = "inline";
    }

    let soulStone = document.getElementsByName("sacrifice");
    let soulStoneCheck = false;
    for (let i = 0; i < soulStone.length; i++) {
        if (soulStone[i].checked) {
            soulStoneCheck = true;
        }
    }
    if (soulStoneCheck) {
        document.getElementById("soulStoneError").style.display = "none";
    } else {
        document.getElementById("soulStoneError").style.display = "inline";
    }

    let alive = document.getElementsByName("character");
    let aliveCheck = false;
    for (let i = 0; i < alive.length; i++) {
        if (alive[i].checked) {
            aliveCheck = true;
        }
    }
    if (aliveCheck) {
        document.getElementById("aliveError").style.display = "none";
    } else {
        document.getElementById("aliveError").style.display = "inline";
    }


    if (scarletWitch && blackPanther && doctorStrange && alienRace && cityCheck && soulStoneCheck && aliveCheck) {
        return true;
    }
    return false;
}

/*
Function that stores the rights answers of the trivia and add a score for each right answer selected.
*/
function rightAnswers() {

    let correctScore = 0;

    if (document.getElementById("scarletWitchName").value === "Wanda") {
        correctScore++;
    }

    if (document.getElementById("blackPantherName").value === "Shuri") {
        correctScore++;
    }

    if (document.getElementById("doctorStrange").value === "Neurosurgeon") {
        correctScore++;
    }

    if (document.getElementById("alienRace").value === "Chitauri") {
        correctScore++;
    }

    if (document.getElementsByName("city")[0].checked) {
        correctScore++;
    }

    if (document.getElementsByName("sacrifice")[1].checked) {
        correctScore++;
    }

    if (document.getElementsByName("character")[4].checked
        && !document.getElementsByName("character")[0].checked
        && !document.getElementsByName("character")[1].checked
        && !document.getElementsByName("character")[2].checked
        && !document.getElementsByName("character")[3].checked) {
        correctScore++;
    }

    return correctScore;
}

/*
Function that calculates the score.
Displays the total percentage with different colors.
*/
function calculate() {
    let correctAnswers = rightAnswers();
    let percentage = correctAnswers / 7 * 100;
    let showPercentage = Math.round(percentage * 100) / 100 + "%";

    if (percentage >= 0 && percentage < 50) {
        document.getElementById("outputDiv").style.color = "red";
    } else if (percentage > 50 && percentage < 80) {
        document.getElementById("outputDiv").style.color = "orange";
    } else {
        document.getElementById("outputDiv").style.color = "green";
    }
    document.getElementById("outputDiv").innerHTML = "Your score is: " + showPercentage;
}
