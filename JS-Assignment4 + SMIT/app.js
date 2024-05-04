// ==========================Program No.1===============================
// function add(x,y){ 
//     return x + y
// }
// document.write(add(2,6))

// ==========================Program No.2===============================
// function currentdate(){
// var date = new Date()
// document.write(date)
// }
// currentdate()

// ==========================Program No.3===============================
// function welcomeUser(firstNAme,lastNAme){
// var firstNAme 
// var lastNAme
// document.write("Welcome " + firstNAme + " "+ lastNAme+ ". How are you today?")
// }
// welcomeUser("hafiz","Mudassir")

// ==========================Program No.4===============================
// function add(x,y){ 
//     return x + y
// }
// document.write(add(2,6))

// ==========================Program No.5===============================
// function calc(a,b,oprtr){
// if(oprtr=="+"){
//     return a+b;
// }else if(oprtr=="-"){
//     return a-b;
// }else if(oprtr=="*"){
//     return a*b;
// }else{
//     return a/b;
// }
// }
// document.write(calc(4,8,prompt("enter operator: ")));

// ==========================Program No.6===============================
// function square(a){
//     return a*a;
// }
// document.write(square(2))

// ==========================Program No.7===============================
// function factorial(num){
//     let result = 1; 
//     for(let i = num; i >= 1; i--){
//         result *= i;
//     }
//     return result; 
// }
// var b = factorial(5);
// console.log(b); 

// ==========================Program No.8===============================
// function displayCounting(a,b){
// for(let i =a ; i<= b;i++){
//     document.write(i+" <br>");
// }
// }
// displayCounting(10,100)

// ==========================Program No.9===============================
// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(num) {
//         return num * num;
//     }
//     const baseSquare = calculateSquare(base);
//     const perpendicularSquare = calculateSquare(perpendicular);
//     const hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);
//     return hypotenuse;
// }

// var hypotenuse = console.log(" the hypotenous: " + calculateHypotenuse(10, 10));

// ==========================Program No.10===============================
// var variableCount = prompt("Enter any string(name): ")
// var count = variableCount.length
// document.write(count)

// ==========================Program No.11===============================
// function findLargest() {
//     const numbers = Array.from(arguments);
//     let largest = numbers[0];
//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] > largest) {
//             largest = numbers[i];
//         }
//     }
//     return largest;
// }
// const largest = findLargest(10, 5, 20, 15, 8);
// console.log("Largest number:", largest);


// ==========================Program No.12===============================
// function calculateAreaWithValue(width, height) {
//     return width * height;
// }
// const areaWithValue = calculateAreaWithValue(5, 3);
// console.log("Area with values:", areaWithValue);
// function calculateAreaWithVariables() {
//     const width = arguments[0]; 
//     const height = arguments[1]; 
//     return width * height;
// }
// const w = 5;
// const h = 3;
// const areaWithVariables = calculateAreaWithVariables(w, h);
// console.log("Area with variables:", areaWithVariables);

// ==========================Program No.13===============================
// function sortArray(arr) {
//     return arr.sort((a, b) => a - b);

// }
// // const unsortedArray = sortArray(["a","c","e", "b","d"]);
// const unsortedArray = [3, 1, 4, 2, 5];
// const sortedArray = sortArray(unsortedArray);
// console.log("Sorted array:", sortedArray);

// ==========================Program No.14===============================
// function sumArray(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     return sum;
// }
// const numbers = [1, 2, 3, 4, 5];
// const totalSum = sumArray(numbers);
// console.log("Sum of array elements:", totalSum);

// ==========================Program No.15===============================
// var param = function inner() {
//     return typeof inner;
//     }
//     alert(param());

// ==========================Program No.16===============================
// function power(base, exponent) {
//     let result = 1;
//     for (let i = 0; i < exponent; i++) {
//         result *= base;
//     }
//     return result;
// }
// const result = power(5, 2);
// console.log("poweris : "+result);

// ==========================Program No.17===============================
// function rollDice() {
//     const diceValue = Math.floor(Math.random() * 6) + 1;
//     return diceValue;
// }
// const diceRoll = rollDice();
// console.log("Dice roll result:", diceRoll);

// ==========================Program No.18===============================
// function reverseNumber(number) {
//     let numberArray = String(number).split('');
//     let reversedArray = numberArray.reverse();
//     let reversedNumber = parseInt(reversedArray.join(''));
    
//     return reversedNumber;
// }
// const xyz = 32243;
// const reversedX = reverseNumber(xyz);
// console.log("Reversed number:", reversedX);

// ==========================Program No.19===============================
// function isPalindrome(str) {
//     str = str.toLowerCase();
//     return str === str.split('').reverse().join('');
// }
// const word1 = prompt("Enter any name to chexk is it palainDrome: ");
// console.log(`${word1} is a palindrome:`, isPalindrome(word1));

// ==========================Program No.20===============================
// function capitalizeFirstLetter(str) {
//     const words = str.split(' ');
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }
//     const capitalizedStr = words.join(' ');

//     return capitalizedStr;
// }
// const inputString = 'the quick brown fox';
// const outputString = capitalizeFirstLetter(inputString);
// console.log("Original string:", inputString);
// console.log("String with first letter of each word capitalized:", outputString);

// ==========================Program No.21===============================
// function findLongestWord(str) {
//     const words = str.split(' ');
//     let longestWord = '';
//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }
//     return longestWord;
// }
// const inputString = 'Web Deve Tutorial';
// const longestWord = findLongestWord(inputString);
// console.log("Longest word in the string:", longestWord);

// ==========================Program No.22===============================
// function countVowels(str) {
//     str = str.toLowerCase();
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let vowelCount = 0;
//     for (let char of str) {
//         if (vowels.includes(char)) {
//             vowelCount++;
//         }
//     }
//     return vowelCount;
// }
// const inputString = 'JavaScript is awesome';
// const numberOfVowels = countVowels(inputString);
// console.log("Number of vowels in the string:", numberOfVowels);

// ==========================Program No.23===============================
// function getType(value) {
//     return typeof value;
// }
// console.log(getType("Hello")); 
// console.log(getType(42)); 
// console.log(getType(true)); 
// console.log(getType({})); 
// console.log(getType(function() {})); 
// console.log(getType(undefined)); 

// ==========================Program No.24=====CHATGPT==========================
// function extractUniqueCharacters(str) {
//     const uniqueChars = {};
//     for (let char of str) {
//         uniqueChars[char] = true;
//     }
//     const uniqueString = Object.keys(uniqueChars).join('');
//     return uniqueString;
// }
// const inputString = "thequickbrownfoxjumpsoverthelazydog";
// const uniqueChars = extractUniqueCharacters(inputString);
// console.log("Unique characters:", uniqueChars);

// ==========================Program No.25===============================
// function countOccurrences(str, letter) {
//     str = str.toLowerCase();
//     letter = letter.toLowerCase();
//     let count = 0;
//     for (let char of str) {
//         if (char === letter) {
//             count++;
//         }
//     }
//     return count;
// }
// const sampleString = 'JSResourceS.com';
// const letterToCount = 'o';
// const occurrences = countOccurrences(sampleString, letterToCount);
// console.log("Number of occurrences of letter '" + letterToCount + "':", occurrences);

// ==========================Program No.26===============================
// function calculateAge(birthYear, currentYear) {
//     const age1 = currentYear - birthYear;
//     const age2 = age1 - 1;
//     console.log("You are either " + age1 + " or " + age2);
// }
// calculateAge(1990, 2024);
// calculateAge(1985, 2024);
// calculateAge(2000, 2024);

// ==========================Program No.27===============================
// function calculateSupply(age, amountPerDay) {
//     const maxAge = 90;
//     const remainingYears = maxAge - age;
//     const totalAmount = remainingYears * 365 * amountPerDay;
//     console.log("You will need " + totalAmount + " to last you until the ripe old age of " + maxAge);
// }
// calculateSupply(25, 2); 
// calculateSupply(30, 3);
// calculateSupply(40, 1); 


