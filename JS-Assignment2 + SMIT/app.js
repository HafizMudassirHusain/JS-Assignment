

//===============================Program No:0=======================================

// var user = prompt("Plz Enter your name ");
// alert("HI, " + user);

//===============================Program No:1======================================

// var userInp= +prompt('Enter a number: ');
// for(var i = 1;i<=10;i++){
//     if(userInp == ''){
//         userInp=5;
//         document.write(`${userInp} X ${i} = ${i*userInp} <br>`);
//     }else{
//     document.write(`${userInp} X ${i} = ${i*userInp} <br>`);
//     }
// }

//===============================Program No:2=======================================

// var userInp= prompt('Enter a city Name: ');
// if(userInp == "karachi"){
//     alert(`welcome to the city of light`);
// }else{
//     alert(`welcome to theses city`);
// }

//===============================Program No:3=======================================
// var userInp= prompt('Enter a gender: ');
// if(userInp == "Male"){
//     alert(`Good Morning Sir`);
// }else{
//     alert(`Good Morning Maam`);
// }
//===============================Program No:4=======================================

// var userInp= prompt('Enter a trafic signal light: ');
// if(userInp == "red"){
//     alert(`vechile must stop`);
// }
// else if(userInp == "yellow"){
//     alert(`vechile should get ready to more`);
// }
// else {
//     alert(`vechile can move now`);
// }

//===============================Program No:5=======================================

// var maxAge = prompt("Enter maximum age:");
// var currentAge = prompt("Enter your current age:");
// maxAge = parseInt(maxAge);
// currentAge = parseInt(currentAge);
// if (currentAge <= maxAge) {
//     alert("You are welcome");
// } else {
//     alert("Sorry, you are not welcome");
// }

//===============================Program No:6=======================================
// var remainingFuel = prompt("Enter remaining fuel in your car: ");
// remainingFuel = parseFloat(remainingFuel);
// if (remainingFuel < 0.25) {
//     alert("Please refill the fuel in your car");
// } else {
//     alert("You have enough fuel");
// }

//===============================Program No:7=======================================
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
//  if("car" < "cat"){
// alert("car is smaller than cat");
// }

//===============================Program No:8=======================================

// var marksSubject1 = parseFloat(prompt("Enter marks obtained in subject 1:"));
// var marksSubject2 = parseFloat(prompt("Enter marks obtained in subject 2:"));
// var marksSubject3 = parseFloat(prompt("Enter marks obtained in subject 3:"));
// var totalMarks = parseFloat(prompt("Enter total marks:"));
// var totalMarksObtained = marksSubject1 + marksSubject2 + marksSubject3;
// var percentage = (totalMarksObtained / (3 * totalMarks)) * 100;
// var grade;
// if (percentage >= 90) {
//     grade = 'A+';
// } else if (percentage >= 80) {
//     grade = 'A';
// } else if (percentage >= 70) {
//     grade = 'B';
// } else if (percentage >= 60) {
//     grade = 'C';
// } else if (percentage >= 50) {
//     grade = 'D';
// } else {
//     grade = 'F';
// }
// var remarks;
// if (percentage >= 60) {
//     remarks = 'Pass';
// } else {
//     remarks = 'Fail';
// }
// document.write("<h2>Result</h2>");
// document.write("<p>Total Marks: " + totalMarks + "</p>");
// document.write("<p>Marks Obtained: " + totalMarksObtained + "</p>");
// document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");
// document.write("<p>Grade: " + grade + "</p>");
// document.write("<p>Remarks: " + remarks + "</p>");

//===============================Program No:9=======================================
// var itemName1 = prompt("Enter the name of item 1:");
// var itemPrice1 = parseFloat(prompt("Enter the price of item 1 (PKR):"));
// var itemQuantity1 = parseInt(prompt("Enter the ordered quantity of item 1:"));

// var itemName2 = prompt("Enter the name of item 2:");
// var itemPrice2 = parseFloat(prompt("Enter the price of item 2 (PKR):"));
// var itemQuantity2 = parseInt(prompt("Enter the ordered quantity of item 2:"));
// var shippingCharges = parseFloat(prompt("Enter the shipping charges (PKR):"));
// var totalCost = (itemPrice1 * itemQuantity1) + (itemPrice2 * itemQuantity2) + shippingCharges;

// if (totalCost > 2000) {
//     var discount = 0.1 * totalCost;
//     totalCost -= discount;
// }
// document.write("<h2>Receipt</h2>");
// document.write("<p>Item 1: " + itemName1 + " - Price: " + itemPrice1 + " PKR - Quantity: " + itemQuantity1 + "</p>");
// document.write("<p>Item 2: " + itemName2 + " - Price: " + itemPrice2 + " PKR - Quantity: " + itemQuantity2 + "</p>");
// document.write("<p>Shipping Charges: " + shippingCharges + " PKR</p>");
// document.write("<p>Total Cost: " + totalCost.toFixed(2) + " PKR</p>");


//===============================Program No:10=======================================

// var secretNumber = Math.floor(Math.random() * 10) + 1;
// var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));
// if (userGuess === secretNumber) {
//     alert("Bingo! Correct answer");
// } else if (userGuess === secretNumber - 1 || userGuess === secretNumber + 1) {
//     alert("Close enough to the correct answer");
// } else {
//     alert("Incorrect guess. The secret number was " + secretNumber);
// }


//===============================Program No:11=======================================

// var number = parseInt(prompt("Enter a number:"));
// if (number % 3 === 0) {
//     alert(number + " is divisible by 3.");
// } else {
//     alert(number + " is not divisible by 3.");
// }

//===============================Program No:12=======================================

// var teamNameA = prompt("Enter name of Team A:");
// var teamScoreA = parseInt(prompt("Enter total score of Team A:"));

// var teamNameB = prompt("Enter name of Team B:");
// var teamScoreB = parseInt(prompt("Enter total score of Team B:"));
// var winner;
// if (teamScoreA > teamScoreB) {
//     winner = teamNameA + " wins!";
// } else if (teamScoreB > teamScoreA) {
//     winner = teamNameB + " wins!";
// } else {
//     winner = "It's a tie!";
// }
// alert(winner);

//===============================Program No:13=======================================

// var str = "Hello";
// var num = 42;
// var bool = true;
// if (typeof str === "string") {
//     console.log("The variable 'str' is a string.");
// } else {
//     console.log("The variable 'str' is not a string.");
// }
// if (typeof num === "number") {
//     console.log("The variable 'num' is a number.");
// } else {
//     console.log("The variable 'num' is not a number.");
// }
// if (typeof bool === "boolean") {
//     console.log("The variable 'bool' is a boolean.");
// } else {
//     console.log("The variable 'bool' is not a boolean.");
// }

//===============================Program No:14=======================================

// var number = parseInt(prompt("Enter a number:"));
// if (number % 2 === 0) {
//     alert(number + " is an even number.");
// } else {
//     alert(number + " is an odd number.");
// }

//===============================Program No:15=======================================

// var temperature = parseFloat(prompt("Enter the temperature in Karachi:"));
// if (temperature > 40) {
//     alert("It is too hot outside.");
// } else if (temperature > 30) {
//     alert("The Weather today is Normal.");
// } else if (temperature > 20) {
//     alert("Today’s Weather is cool.");
// } else if (temperature > 10) {
//     alert("OMG! Today’s weather is so Cool.");
// } else {
//     alert("It's freezing cold outside!");
// }

//===============================Program No:16=======================================

// var num1 = parseFloat(prompt("Enter the first number:"));
// var num2 = parseFloat(prompt("Enter the second number:"));
// var operation = prompt("Enter the operation (+, -, *, /, %):");
// var result;
// if (operation === "+") {
//     result = num1 + num2;
// } else if (operation === "-") {
//     result = num1 - num2;
// } else if (operation === "*") {
//     result = num1 * num2;
// } else if (operation === "/") {
//     if (num2 !== 0) {
//         result = num1 / num2;
//     } else {
//         result = "Cannot divide by zero!";
//     }
// } else if (operation === "%") {
//     result = num1 % num2;
// } else {
//     result = "Invalid operation!";
// }
// alert("Result: " + result);

//===============================Program No:17=======================================

// var day = prompt("Enter the day name:");
// if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
//     alert("It's a week day");
// } else if (day === "Saturday") {
//     alert("It's weekend");
// } else if (day === "Sunday") {
//     alert("Yay! It's a holiday");
// } else {
//     alert("Invalid day name");
// }

//===============================Program No:18=======================================

// var score = parseFloat(prompt("Enter your score:"));
// if (score > 50) {
//     alert("You are passed");
// } else {
//     alert("Try again!");
// }

//===============================Program No:19=======================================

// var num1 = parseFloat(prompt("Enter the first number:"));
// var num2 = parseFloat(prompt("Enter the second number:"));
// if (num1 > num2) {
//     alert("The greater number of " + num1 + " and " + num2 + " is " + num1);
// } else if (num2 > num1) {
//     alert("The greater number of " + num1 + " and " + num2 + " is " + num2);
// } else {
//     alert("Both numbers are equal.");
// }

//===============================Program No:20=======================================

// var languageCode = prompt("Enter a language code (e.g., 'es' for Spanish, 'de' for German, 'en' for English):");
// var greeting;
// if (languageCode === "es") {
//     greeting = "¡Hola, mundo!";
// } else if (languageCode === "de") {
//     greeting = "Hallo, Welt!";
// } else {
//     greeting = "Hello, World!";
// }
// alert(greeting);


//===============================Program No:21=======================================

// var number = parseFloat(prompt("Enter a number:"));
// if (number > 0) {
//     alert("The number is positive.");
// } else if (number < 0) {
//     alert("The number is negative.");
// } else {
//     alert("The number is zero.");
// }

//===============================Program No:22=======================================

// var noun = prompt("Enter a noun:");
// var number = parseInt(prompt("Enter a number:"));
// var pluralizedNoun;
// if (number !== 1) {
//     pluralizedNoun = noun + "s";
// } else {
//     pluralizedNoun = noun;
// }
// alert(number + " " + pluralizedNoun);

//===============================New CHAPTER======================================
//===============================Program No:23=======================================

// var age = 20;
// if (age > 18) {
//     console.log("Old enough");
// } else {
//     console.log("Too young");
// }

//===============================Program No:24=======================================

// var userName = prompt("What's your name?");
// var yourName = "YourName";
// if (userName === yourName) {
//     console.log("Hey there, " + userName + "! Nice to meet you!");
// }

//===============================Program No:25=======================================


// var number = parseInt(prompt("Enter a number:"));
// switch (number % 3) {
//     case 0:
//         console.log("Number is divisible by 3");
//         break;
//     default:
//         console.log("Number is not divisible by 3");
// }

//===============================Program No:26=======================================

// var input = prompt("Enter a character (number or string):");
// var charCode = input.charCodeAt(0);
// if (charCode >= 48 && charCode <= 57) {
//     console.log("The input is a number.");
// } else if (charCode >= 65 && charCode <= 90) {
//     console.log("The input is an uppercase letter.");
// } else if (charCode >= 97 && charCode <= 122) {
//     console.log("The input is a lowercase letter.");
// } else {
//     console.log("Invalid input.");
// }

//===============================Program No:27=======================================

// var number1 = parseFloat(prompt("Enter the first number:"));
// var number2 = parseFloat(prompt("Enter the second number:"));
// var operator = prompt("Enter the operator (+, -, *, /, %):");
// var result;
// switch (operator) {
//     case "+":
//         result = number1 + number2;
//         break;
//     case "-":
//         result = number1 - number2;
//         break;
//     case "*":
//         result = number1 * number2;
//         break;
//     case "/":
//         result = number1 / number2;
//         break;
//     case "%":
//         result = number1 % number2;
//         break;
//     default:
//         result = "Invalid operator";
// }
// console.log("Result: " + result);

//===============================Program No:28=======================================

// var time24 = parseInt(prompt("Enter time in 24-hour clock format (e.g., 1900 for 7pm):"));
// var hour, period;
// if (time24 >= 0 && time24 < 1200) {
//     hour = time24 / 100;
//     period = "am";
// } else if (time24 >= 1200 && time24 < 2400) {
//     hour = (time24 - 1200) / 100;
//     period = "pm";
// } else {
//     hour = "Invalid";
//     period = "";
// }
// console.log("Time in 12-hour clock format: " + hour + period);

//===============================Program No:29=======================================

// var year = parseInt(prompt("Enter a calendar year (YYYY format):"));
// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     console.log(year + " is a leap year.");
// } else {
//     console.log(year + " is not a leap year.");
// }

//===============================Program No:30=======================================

// var correctPassword = "MySecretPassword";
// var userPassword = prompt("Enter your password:");
// if (!userPassword) {
//     alert("Please enter your password");
// } else if (userPassword === correctPassword) {
//     alert("Correct! The password you entered matches the original password");
// } else {
//     alert("Incorrect password");
// }

//===============================Program No:31=======================================

// var firstName = "Ali";
// if (firstName === "Fahad") {
//     document.write("Hello Fahad!");
// } else {
//     document.write("You are not Fahad");
// }

//===============================Program No:32=======================================

// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }


//===============================Program No:33=======================================

// var num1 = parseInt(prompt("Enter the first integer:"));
// var num2 = parseInt(prompt("Enter the second integer:"));
// if (num1 > num2) {
//     console.log("The larger integer is: " + num1);
// } else if (num2 > num1) {
//     console.log("The larger integer is: " + num2);
// } else {
//     console.log("Both integers are equal.");
// }

//===============================Program No:34=======================================

// var number = parseInt(prompt("Enter a number:"));
// if (number > 0) {
//     console.log("The number is positive.");
// } else if (number < 0) {
//     console.log("The number is negative.");
// } else {
//     console.log("The number is zero.");
// }

//===============================Program No:35=======================================

// var hour = parseInt(prompt("Enter the current hour in 24-hour clock format (e.g., 14 for 2pm):"));
// if (hour >= 6 && hour < 9) {
//     console.log("Breakfast is served.");
// } else if (hour >= 11 && hour < 13) {
//     console.log("Time for lunch.");
// } else if (hour >= 17 && hour < 20) {
//     console.log("It's dinner time.");
// } else {
//     console.log("Sorry, you'll have to wait, or go get a snack.");
// }

//===============================Program No:36=======================================

// var variable = 42;
// var variableType;
// if (typeof variable === "number") {
//     variableType = "number";
// } else if (typeof variable === "string") {
//     variableType = "string";
// } else if (typeof variable === "boolean") {
//     variableType = "boolean";
// } else {
//     variableType = "undefined";
// }
// console.log("The type of the variable is: " + variableType);

//===============================Program No:37=======================================

// var character = prompt("Enter a character:");
// var isVowel;
// switch (character.toLowerCase()) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//         isVowel = true;
//         break;
//     default:
//         isVowel = false;
// }
// console.log("Is the character a vowel? " + isVowel);

//===============================Program No:38=======================================

// console.log(10 !== 8);

// //===============================Program No:39=======================================

// var monthNumber = parseInt(prompt("Enter the number of a month:"));
// switch (monthNumber) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     case 6:
//         console.log("June");
//         break;
//     case 7:
//         console.log("July");
//         break;
//     case 8:
//         console.log("August");
//         break;
//     case 9:
//         console.log("September");
//         break;
//     case 10:
//         console.log("October");
//         break;
//     case 11:
//         console.log("November");
//         break;
//     case 12:
//         console.log("December");
//         break;
//     default:
//         console.log("Invalid month number");
// }

//===============================Program No:40=======================================

// var age = 20;
// var voteable = (age < 18) ? "Too young" : "Old enough";
// console.log(voteable);


//===============================Program No:41=======================================
//===============================Program No:42=======================================
//===============================Program No:43=======================================
//===============================Program No:44=======================================
//===============================Program No:45=======================================
//===============================Program No:46=======================================
//===============================Program No:47=======================================
//===============================Program No:48=======================================
//===============================Program No:49=======================================
//===============================Program No:50=======================================
//===============================Program No:51=======================================
//===============================Program No:52=======================================
//===============================Program No:53=======================================
//===============================Program No:54=======================================
//===============================Program No:55=======================================
//===============================Program No:56=======================================
//===============================Program No:57=======================================
//===============================Program No:58=======================================
//===============================Program No:59=======================================
//===============================Program No:60=======================================
//===============================Program No:61=======================================
//===============================Program No:62=======================================
//===============================Program No:63=======================================
//===============================Program No:64=======================================
//===============================Program No:65=======================================
