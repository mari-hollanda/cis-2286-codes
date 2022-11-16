/*
* Author Name: Marianna Hollanda
* Date: 2021-02-02
* Purpose: Store the Tax It functions
*/

/* Function to Calculate the Tax */
function calculateTax(amount) {

    if (Number.isNaN(Number(amount)))
        return "invalid";

    var tax;

    amount = Number(amount)

    if (amount <= 5) tax = 0.2;
    else if (amount >= 5.01 && amount <= 100) tax = 0.15;
    else if (amount >= 100.01) tax = 0.05;

    var total = amount + amount * tax;

    total = Math.round(total * 100) / 100;

    return total;

}

/* Function to Format the Money */
function formatMoney(amount, includeCommas) {
    amount = Number(amount)
    var formatted = amount.toLocaleString('en-US', {useGrouping: includeCommas});
    return "$" + formatted;


}

/* Prompting */
var dollarAmount = Number(prompt("Enter a value:"));

alert(formatMoney(calculateTax(dollarAmount), true));