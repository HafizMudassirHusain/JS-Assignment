// ===================================Program No. 1======================================

// var age = +prompt("Enter the age: ");
// switch(true){
//    case(age >= 18):
//    alert("Old Enough");
//    break;
//    case(age <= 17):
//    alert("to young")
// }


// ===================================Program No. 2======================================
// var num = +prompt("Enter the Number to check its divisible by 3 or not: ");
// switch(true){
//    case(num % 3 == 0):
//    alert("yes it is divisible");
//    break;
//    default:
//    alert(" not divisible")
// }


// ===================================Program No. 3======================================
// var num1 = +prompt("enter number first: ")
// var num2 = +prompt("enter number first: ")
// var op = prompt("enter number first: ")
// switch(op){
//     case "+":
//         document.write(num1+num2);
//         break;
//         case "-":
//             document.write(num1-num2);
//             break;
//             case "/":
//             document.write(num1/num2);
//             break;    
//             case "*":
//         document.write(num1*num2);
//         break;
// }


// ===================================Program No. 4======================================
// var date = new Date();
// var day = date.getDay()
// var b = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
// document.write(b[day])


// ===================================Program No. 5======================================
// var date = new Date();
// var day = date.getDay()
// var b = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
// if(b[day]!== "sunday" && b[day] !== "saturday"){
//     document.write("today is not saturday or nor sunday")
// }else{
//     document.write("today is sunday")
// }

// document.write("<br> today is "+b[day])


// ===================================Program No. 6======================================
// function checkCar() {
//     var text;
//     var favCar = prompt("What is your favoritecar?");
//     switch(favCar) {
//    case "BMW":
//     text = "Germon car for ";
//     document.write(favCar);
//     break;

//     case "Ford":
//     text = "American car for ";
//     document.write(favCar);
//     break;

//     case "Peugeot":
//     text = "French car for ";
//     document.write(favCar);
//     break;

//     default:
//         document.write("unknow car name")
//     }
//     document.write(text);
//     }
//     checkCar();

// ===================================Program No. 7======================================
// function checkFruit() {
//     var text;
//     var fruits = prompt("Enter a fruit name");
//     switch(fruits) {
//     case "Banana":
//     text = "Banana is good!";
//     break;
//     case "Orange":
//     text = "I am not a fan of orange.";
//     break;
//     case "Apple":
//     text = "How you like them apples?"
//     break;
//     default:
//     text = "I have never heard of that "+fruits;
//     }
//     document.write( text);
//     }
//     checkFruit();

// ===================================Program No. 8======================================
// function grade(){
//     var grade = prompt("Enter your grade");
// if(grade =="D"){
// document.write("Marks is <= 50")
// }
// else if(grade == "C"){
//     document.write("your marks >= 50 and < 60")
// }
// else if(grade == "B"){
//     document.write("your marks >= 60 and < 70")
// }
// else if(grade == "A"){
//     document.write("your marks >= 70 and < 80")
// }
// else if(grade == "A+"){
//     document.write("your marks >= 80 and <= 100")
// }
// }
// grade();

// ===================================Program No. 9======================================

// var monthNumber = parseInt(prompt("Enter the number of a month (1-12):"), 10);
// var monthName;
// switch (monthNumber) {
//     case 1:
//         monthName = "January";
//         break;
//     case 2:
//         monthName = "February";
//         break;
//     case 3:
//         monthName = "March";
//         break;
//     case 4:
//         monthName = "April";
//         break;
//     case 5:
//         monthName = "May";
//         break;
//     case 6:
//         monthName = "June";
//         break;
//     case 7:
//         monthName = "July";
//         break;
//     case 8:
//         monthName = "August";
//         break;
//     case 9:
//         monthName = "September";
//         break;
//     case 10:
//         monthName = "October";
//         break;
//     case 11:
//         monthName = "November";
//         break;
//     case 12:
//         monthName = "December";
//         break;
//     default:
//         monthName = "Invalid month number";
// }
// alert("The month is " + monthName);

// ===================================Program No. 10======================================

// var age = 20; 
// var voteable = (age < 18) ? "Too young" : "Old enough";
// console.log(voteable);

// ===================================Program No. 11======================================

// for (var i = 0; i < 5; i++) {
//     document.write("Hello World<br>");
// }

// ===================================Program No. 12======================================

// for (var i = 1; i <= 10; i++) {
//     console.log(i);
//     document.write(i + "<br>");
// }

// ===================================Program No. 13======================================
// var tableNumber = parseInt(prompt("Enter the table number:"), 10);
// var tableLength = parseInt(prompt("Enter the length of the table:"), 10);


// document.write("Multiplication Table of " + tableNumber + "<br>");
// for (var i = 1; i <= tableLength; i++) {
//     var result = tableNumber * i;
//     document.write(tableNumber + " x " + i + " = " + result + "<br>");
// }

// ===================================Program No. 14======================================

// var A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"]
// for(i=0;i<A.length;i++){
//     document.write(A[i] + "<br>");
// }

// ===================================Program No. 15======================================
// var A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"]
// for(i=0;i<A.length;i++){
//     document.write(A[i] + "<br>");
// }
// for(i=0;i<A.length;i++){
//     document.write("Element at index"+i + " is "+ A[i]+" <br>");
// }

// ===================================Program No. 16======================================

// var N = parseInt(prompt("Enter the number of items for the array:"), 10);
// var itemsArray = [];
// for (var i = 0; i < N; i++) {
//     var item = prompt("Enter item " + (i + 1) + ":");
//     itemsArray.push(item);
// }
// console.log("The initialized array is:", itemsArray);
// document.write("The initialized array is: [" + itemsArray.join(", ") + "]");


// ===================================Program No. 17======================================
// document.write("Counting: ");
// for (var i = 1; i <= 15; i++) {
//     document.write(i);
//     if (i < 15) {
//         document.write(", ");
//     }
// }
// document.write("<br>");

// document.write("Reverse counting: ");
// for (var i = 10; i >= 1; i--) {
//     document.write(i);
//     if (i > 1) {
//         document.write(", ");
//     }
// }
// document.write("<br>");

// document.write("Even: ");
// for (var i = 0; i <= 20; i += 2) {
//     document.write(i);
//     if (i < 20) {
//         document.write(", ");
//     }
// }
// document.write("<br>");

// document.write("Odd: ");
// for (var i = 1; i < 20; i += 2) {
//     document.write(i);
//     if (i < 19) {
//         document.write(", ");
//     }
// }
// document.write("<br>");

// document.write("Series: ");
// for (var i = 2; i <= 20; i += 2) {
//     document.write(i + "k");
//     if (i < 20) {
//         document.write(", ");
//     }
// }
// document.write("<br>");


// ===================================Program No. 18======================================

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter an item to search for:").toLowerCase();
// var isFound = false;
// for (var i = 0; i < A.length; i++) {
//     if (A[i] === userInput) {
//         isFound = true;
//         break;
//     }
// }
// if (isFound) {
//     alert(userInput + " is found in the list.");
// } else {
//     alert(userInput + " is not found in the list.");
// }


// ===================================Program No. 19======================================
// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];
// for(i=0;i<students.length;i++){
//     document.write(`<table border=1>
//     <tr>
//     <td>${students[i]}</td>
//     <td>${scores[i]}</td>
//     </tr>
// </table>`)
// }

// ===================================Program No. 20======================================

// var scores = [12, 45, 3, 22, 34, 50];
// function printUntilStopValue(stopValue) {
//     for (var i = 0; i < scores.length; i++) {
//         console.log(scores[i]);
//         if (scores[i] === stopValue) {
//             break;
//         }
//     }
// }
// var stopValue = parseInt(prompt("Enter a stop value: "), 10);
// printUntilStopValue(stopValue);


// ===================================Program No. 21======================================

// var A = [ [1,2,3] , [4,5,6] , [7,8,9] ]
// for(var i =0 ; i<A.length;i++){
//     for(var j =0 ; j<A[i].length;j++){
//         document.write(A[i][j] + " ")
//         }
//         document.write("<br>")
// }

// ===================================Program No. 22======================================

// function printDecreasingValues(num) {
//     while (num > 0) {
//         console.log(num);
//         num -= 0.5;
//     }
// }
// var num = parseFloat(prompt("Enter a positive number: "));
// printDecreasingValues(num);

// ===================================Program No. 23======================================

// function evenOddReporter() {
//     for (var i = 0; i <= 20; i++) {
//         if (i % 2 === 0) {
//             console.log(i + " is even");
//         } else {
//             console.log(i + " is odd");
//         }
//     }
// }
// evenOddReporter();

// ===================================Program No. 24======================================

// function productOfOddIntegers() {
//     let product = 1;

//     for (let i = 1; i <= 7; i += 2) {
//         product *= i;
//     }
//     return product;
// }
// console.log("The product of the odd integers from 1 to 7 is: " + productOfOddIntegers());

// ===================================Program No. 25======================================

// function printWedgeOfStars(initialStars) {
//     for (let i = initialStars; i > 0; i--) {
//         console.log('*'.repeat(i));
//     }
// }
// let initialStars = parseInt(prompt("Enter the initial number of stars: "), 10);
// printWedgeOfStars(initialStars);


// ===================================Program No. 26======================================

    //  function patternA(lines) {
    //     let result = '';
    //     for (let i = 0; i < lines; i++) {
    //         result += '*'.repeat(lines) + '\n';
    //     }
    //     return result;
    // }
    // function patternB(lines) {
    //     let result = '';
    //     for (let i = 1; i <= lines; i++) {
    //         result += '*'.repeat(i) + '\n';
    //     }
    //     return result;
    // }
    // function patternC(lines) {
    //     let result = '';
    //     for (let i = lines; i > 0; i--) {
    //         result += '*'.repeat(i) + '\n';
    //     }
    //     return result;
    // }
    // let lines = parseInt(prompt("Enter the number of lines: "), 10);
    // document.body.innerHTML += '<pre>' + patternA(lines) + '</pre>';
    // document.body.innerHTML += '<pre>' + patternB(lines) + '</pre>';
    // document.body.innerHTML += '<pre>' + patternC(lines) + '</pre>';

