/*
Name: Marianna Hollanda Campos Pedroso
Date: March 5th, 2021
Purpose: CIS-2286, Assignment 3
*/

window.addEventListener("load", initiate, false);

function initiate() {
    document.getElementById("formulary").addEventListener('submit', function (event) {
        event.preventDefault();

        if (checkInitiate()) {
            let outputDiv = document.getElementById("outputDiv");
            outputDiv.innerHTML = "";
            outputDiv.innerHTML += 'First Name: '+document.getElementById("firstName").value+'<br>';
            outputDiv.innerHTML += 'Last Name: '+document.getElementById("lastName").value+'<br>';
            outputDiv.innerHTML += 'NintendoID: '+document.getElementById("nintendoID").value+'<br>';
            outputDiv.innerHTML += 'Housewares Quantity: '+document.getElementById("housewaresQuantity").value+'<br>';
            outputDiv.innerHTML += 'Diy Quantity: '+document.getElementById("diyQuantity").value+'<br>';

            let checkBoxObjCollection = document.getElementsByName("animalCrossingNpc[]");
            for (let i = 0; i < checkBoxObjCollection.length; i++) {
                if(checkBoxObjCollection[i].checked)
                    outputDiv.innerHTML += 'Discount: '+checkBoxObjCollection[i].value*100+'%<br>'
            }


            if (document.getElementById("checkDiyYes").checked) {
                outputDiv.innerHTML += 'Random DIY item: Yes<br>';
            }else{
                outputDiv.innerHTML += 'Random DIY item: No<br>';
            }

            if (document.getElementById("checkVillagerYes").checked) {
                outputDiv.innerHTML += 'Villager: Yes<br>';
            }else{
                outputDiv.innerHTML += 'Villager: No<br>';
            }

            outputDiv.innerHTML += 'Seller remarks: '+document.getElementsByName('sellInfo')[0].value+'<br>';
            outputDiv.innerHTML += 'Total Cost: '+document.getElementById('totalCost').value+'<br>';


        }

    });

    document.getElementById('resetButton').addEventListener("click", function(){
      let outputDiv = document.getElementById("outputDiv");
      outputDiv.innerHTML = "";
    });

    document.getElementById("housewaresQuantity").addEventListener('change', calculateTotal, false);
    document.getElementById("diyQuantity").addEventListener('change', calculateTotal, false);
    document.getElementById("npc").addEventListener('change', calculateTotal, false);

    let radioObjOneCollection = document.getElementsByName("checkDiy");
    for (let i = 0; i < radioObjOneCollection.length; i++) {
        radioObjOneCollection[i].addEventListener('change', calculateTotal, false);
    }

    let radioObjTwoCollection = document.getElementsByName("checkVillager");
    for (let i = 0; i < radioObjTwoCollection.length; i++) {
        radioObjTwoCollection[i].addEventListener('change', calculateTotal, false);
    }

    let checkBoxObjCollection = document.getElementsByName("animalCrossingNpc[]");
    for (let i = 0; i < checkBoxObjCollection.length; i++) {
        checkBoxObjCollection[i].addEventListener('change', calculateTotal, false);
    }

    function checkInitiate() {

        let firstName = checkTextField(document.getElementById("firstName"), document.getElementById("firstNameError"));
        let lastName = checkTextField(document.getElementById("lastName"), document.getElementById("lastNameError"));
        let nintendoID = checkNumeric(document.getElementById("nintendoID"), document.getElementById("nintendoIDError"), 12);
        let housewaresQuantity = checkQuantity(document.getElementById("housewaresQuantity"), document.getElementById("housewaresQuantityError"));
        let diyQuantity = checkQuantity(document.getElementById("diyQuantity"), document.getElementById("diyQuantityError"));

        if (firstName && lastName && nintendoID && housewaresQuantity && diyQuantity) {
            return true;
        }
        return false;
    }

    function calculateTotal() {

        let totalCost = 0.00;

        let RANDOM_DIY = 3;
        let VILLAGER_NEEDED = 5;

        let housewaresQuantity = document.getElementById("housewaresQuantity").value;
        let diyQuantity = document.getElementById("diyQuantity").value;
        let housewaresCost = parseFloat(housewaresQuantity * 10);
        let diyCost = parseFloat(diyQuantity * 5);

        totalCost = housewaresCost + diyCost;

        if (document.getElementById("checkDiyYes").checked) {
            totalCost += RANDOM_DIY;
        }

        if (document.getElementById("checkVillagerYes").checked) {
            totalCost += VILLAGER_NEEDED;
        }

        let checkedBoxes = document.getElementsByName("animalCrossingNpc[]");
        for (let i = 0; i < checkedBoxes.length; i++) {
            //if it is checked add it to the totalCost
            if (checkedBoxes[i].checked === true) {
                totalCost -= (totalCost * parseFloat(checkedBoxes[i].value));
            }
        }
        document.getElementById("totalCost").value = "$" + totalCost.toFixed(2);
    }



}
