// ==============================Program No.1 =============================
// var number = +prompt("enter any number: ");
// document.write("Your Number is : "+ number)
// document.write("After Round off Number : " + Math.round(number))
// document.write("After Floor Number : " + Math.floor(number))
// document.write("After Ceil Number : " + Math.ceil(number))

// ==============================Program No.2 =============================
// var number = +prompt("enter any megative number: ");
// document.write("Your Number is : "+ number)
// document.write("After Round off Number : " + Math.round(number))
// document.write("After Floor Number : " + Math.floor(number))
// document.write("After Ceil Number : " + Math.ceil(number))

// ==============================Program No.3 =============================
// var number = +prompt("enter any floating number: ");
// document.write("Your Number is : "+ number)
// document.write("After Round off Number : " + Math.round(number))
// document.write("After Floor Number : " + Math.floor(number))
// document.write("After Ceil Number : " + Math.ceil(number))


// ==============================Program No.4 =============================
// var number = +prompt("enter any negative floating number: like 23.85756 ");
// document.write("Your Number is : "+ number)
// document.write("After Round off Number : " + Math.round(number))
// document.write("After Floor Number : " + Math.floor(number))
// document.write("After Ceil Number : " + Math.ceil(number))

// ==============================Program No.5 =============================
// function absoluteValue(number) {
//     if (number < 0) {
//         return -number;
//     } else {
//         return number;
//     }
// }
// console.log("The absolute value of -4 is:", absoluteValue(-4)); // Output: 4
// console.log("The absolute value of 5 is:", absoluteValue(5));   // Output: 5

// ==============================Program No.6 =============================
// var random = console.log(Math.floor( Math.random()*7))

// ==============================Program No.7 =============================
// function coinToss() {
//     var randomNumber = Math.random();
//     var result = randomNumber < 0.5 ? "Heads" : "Tails";
//     return result;
// }
// console.log("The result of the coin toss is:", coinToss());

// ==============================Program No.8 =============================
// var random = console.log("random number between 1 to 100: "+Math.floor( Math.random()*101))

// ==============================Program No.9 =============================
// var userInput = prompt("Please enter your weight:");
// var weight = parseFloat(userInput);
// if (!isNaN(weight)) {
//     document.write("Your weight is: " + weight + ".");
// } else {
//     document.write("Invalid input! Please enter a valid number for your weight.");
// }

// ==============================Program No.10 =============================
// var secretNumber = Math.floor(Math.random() * 10) + 1;
// var userInput = parseInt(prompt("Guess the secret number (between 1 and 10):"));
// if (userInput === secretNumber) {
//     alert("Congratulations! You guessed the secret number.");
// } else {
//     alert("Sorry, the secret number was " + secretNumber + ". Try again!");
// }

// ==============================Program No.11 =============================
// var date = new Date();
// document.write(date)

// ==============================Program No.12 =============================
// var monthNames = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
// ];
// var currentDate = new Date();
// var currentMonthIndex = currentDate.getMonth();
// var currentMonthName = monthNames[currentMonthIndex];
// alert("The current month is: " + currentMonthName);

// ==============================Program No.13 =============================
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var currentDate = new Date();
// var currentDayIndex = currentDate.getDay();
// var currentDayName = dayNames[currentDayIndex];
// var abbreviatedDayName = currentDayName.substring(0, 3);
// alert("The first 3 letters of the current day are: " + abbreviatedDayName);

// ==============================Program No.14 =============================
// var currentDate = new Date();
// var currentDayIndex = currentDate.getDay();
// if (currentDayIndex === 6 || currentDayIndex === 0) {
//     alert("It’s Fun day");
// } else {
//     alert("It's not Fun day, but you can make it fun!");
// }

// ==============================Program No.15 =============================
// var currentDate = new Date();
// var currentDayOfMonth = currentDate.getDate();
// if (currentDayOfMonth < 16) {
//     alert("First fifteen days of the month");
// } else {
//     alert("Last days of the month");
// }

// ==============================Program No.16 =============================
// var currentDate = new Date();
// var millisecondsSinceEpoch = currentDate.getTime();
// var minutesSinceEpoch = millisecondsSinceEpoch / (1000 * 60);
// console.log("Minutes since midnight, Jan. 1, 1970:", minutesSinceEpoch);


// ==============================Program No.17 =============================
// var currentDate = new Date();
// var currentHour = currentDate.getHours();
// if (currentHour < 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }

// ==============================Program No.18 =============================
// var lastDayOfLastMonth = new Date(2024, 11, 0);
// var laterDate = lastDayOfLastMonth;
// console.log("The last day of the last month of 2024 is:", laterDate);

// ==============================Program No.19 =============================
// var startingDateOfRamadan = new Date(2015, 5, 18); // Note: JavaScript months are 0-based, so 5 represents June
// var currentDate = new Date();
// var timeDifference = currentDate.getTime() - startingDateOfRamadan.getTime();
// var daysPassedSinceRamadan = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
// alert("Number of days passed since 1st Ramadan: " + daysPassedSinceRamadan);


// ==============================Program No.20 =============================
// var referenceDate = new Date();
// var beginningOf2015 = new Date(2015, 0, 1);
// var timeDifference = referenceDate.getTime() - beginningOf2015.getTime();
// var secondsElapsed = Math.floor(timeDifference / 1000);
// document.write("Seconds elapsed since the beginning of 2015: " + secondsElapsed + " seconds.");


// ==============================Program No.21 =============================
// var currentDate = new Date();
// var currentHours = currentDate.getHours();
// currentDate.setHours(currentHours + 1);
// document.write("Updated Date object: " + currentDate);


// ==============================Program No.22 =============================
// var currentDate = new Date();
// var currentYear = currentDate.getFullYear();
// currentDate.setFullYear(currentYear - 100);
// alert("Date reset to 100 years back: " + currentDate);


// ==============================Program No.23 =============================
// var age = parseInt(prompt("Please enter your age:"));
// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - age;
// document.write("Your birth year is: " + birthYear);


// ==============================Program No.24 =============================
var customerName = prompt("Enter your name:");
var currentMonth = prompt("Enter current month (e.g., January):");
var numberOfUnits = parseFloat(prompt("Enter number of units consumed:"));
var chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));
var latePaymentSurchargeRate = parseFloat(prompt("Enter late payment surcharge rate (in %):"));
var netAmountPayable = numberOfUnits * chargesPerUnit;
var latePaymentSurcharge = (netAmountPayable * latePaymentSurchargeRate) / 100;
var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

netAmountPayable = netAmountPayable.toFixed(2);
latePaymentSurcharge = latePaymentSurcharge.toFixed(2);
grossAmountPayable = grossAmountPayable.toFixed(2);
document.write("<h2>K-Electric Bill</h2>");
document.write("<p><strong>Customer Name:</strong> " + customerName + "</p>");
document.write("<p><strong>Current Month:</strong> " + currentMonth + "</p>");
document.write("<p><strong>Number of Units:</strong> " + numberOfUnits.toFixed(2) + "</p>");
document.write("<p><strong>Charges per Unit:</strong> $" + chargesPerUnit.toFixed(2) + "</p>");
document.write("<p><strong>Net Amount Payable (within Due Date):</strong> $" + netAmountPayable + "</p>");
document.write("<p><strong>Late Payment Surcharge:</strong> $" + latePaymentSurcharge + "</p>");
document.write("<p><strong>Gross Amount Payable (after Due Date):</strong> $" + grossAmountPayable + "</p>");







