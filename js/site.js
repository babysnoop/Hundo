// get values from the Page
function getValues() {
    // Get the values
    let startNumber = document.getElementById("startValue").value;
    let endNumber = document.getElementById("endValue").value;
    let numbers = [];
    // parse into Intefers
    startNumber = parseInt(startNumber);
    endNumber = parseInt(endNumber);

    if (Number.isInteger(startNumber) && Number.isInteger(endNumber)) {
        // Call generateNumbers
        numbers = generateNumbers(startNumber, endNumber);
    } else {
        alert("You must enter integers")
    }

    // Call displayNumbers
    displayNumbers(numbers);
}

// Generate numbers from the start value to end value
// logic function
function generateNumbers(sartValue, endValue) {
    let numbers = [];

    for (let index = sartValue; index <= endValue; index++) {

        numbers.push(index);
    }
    return numbers;

}

//Display the number and even numbers in bold
// display or view
function displayNumbers(numbers) {

    let templateRow = "";

    numbers.forEach(number => {
        if (number % 2 == 0) {
            templateRow += `<tr><td><strong>${number}</strong></td></tr>`;
        } else {
            templateRow += `<tr><td>${number}</td></tr>`;
        }

    });

    document.getElementById("results").innerHTML = templateRow;
}