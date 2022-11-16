/*
Name: Don Bowers
Date:
Purpose: Demonstrate the use of forms and functions to create a mini golf business interface.
Modified by Marianna Hollanda
Date: April 2nd, 2021
Purpose: CIS-2286, Assignment 5
*/

// declare global vars
let $totalAfterTax = 0.00;

// create function to initialize the script
$(function initiate() {
    $("#changeButton").on("click", calculateChange);
    $("#resetButton").on("click", resetForm);
    $("#adults").on("change", updateTotals);
    $("#children").on("change", updateTotals);
    $("#caa").on("change", updateTotals);
    $("#mil").on("change", updateTotals);
    $("#fun").on("change", updateTotals);
});

$( function() {
    $( "#dialog" ).dialog();
} );

// create function to do the math calculation
function updateTotals() {
    // get the data
    let $adults = $("#adults").val();
    let $children = $("#children").val();
    // ensure a qty is selected for above
    if ($adults === 0 && $children === 0) {
        // they need to select a qty for children or adults
        alert("You must select a quantity for adults or children.");
    } else {

        // calculate costs
        $("#numAdults").val($adults);
        let $adultTotal =  parseInt($adults) * 4.00;
        $("#numChildren").val($children);
        let $childTotal = $children * 2.00;

        $("#totalAdultsDiv").html("$" + $adultTotal);
        $("#totalChildrenDiv").html("$" + $childTotal);

        let $totalBeforeTax = ($adultTotal + $childTotal);

        // get discount radio choice
        let $deduct = 0;
        let $discountString = "None";
        if ($("#caa").prop("checked")) {
            $deduct = $totalBeforeTax * .10;
            $totalBeforeTax = $totalBeforeTax - $deduct;
            $discountString = "CAA saved $" + $deduct;
        } else if ($("#mil").prop("checked")) {
            $deduct = $totalBeforeTax * .25;
            $totalBeforeTax = $totalBeforeTax - $deduct;
            $discountString = "Military saved $" + $deduct;
        } else if ($("#fun").prop("checked")) {
            $deduct = $totalBeforeTax * .50;
            $totalBeforeTax = $totalBeforeTax - $deduct;
            $discountString = "Super Fun Club saved $" + $deduct;
        }

        $("#discountString").html($discountString);

        $totalAfterTax = $totalBeforeTax * 1.1;

        $("#totalBeforeTaxDiv").html("$" + $totalBeforeTax);
        $("#totalAfterTaxDiv").html("$" + $totalAfterTax);

    } // end if no adults or children selected


} // end update Totals function

//create function to reset the form
function calculateChange() {
    let $amountGiven = prompt("Enter amount client gave you");
    let $changeDue = $amountGiven - $totalAfterTax;
    $("#changeDue").html = "$" + $changeDue;
    $("#changeOutput").css("display", "block");
}

//create function to reset the form
function resetForm() {
    window.location = "miniGolfKiosk.html";
}
