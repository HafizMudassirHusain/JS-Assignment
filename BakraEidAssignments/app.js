var currentDate = new Date();

var eidUlAdhaDate = new Date("june 16, 2024");

var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var eidUlAdhaDayOfWeek = daysOfWeek[eidUlAdhaDate.getDay()];

var timeDifference = eidUlAdhaDate.getTime() - currentDate.getTime();

var remainingDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

var remainingHours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

var remainingMinutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

var remainingSeconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

document.write("<p class=f>Remaining time until Eid ul-Adha:" +"<br></p>");
document.write("<p class=f>Days: " + remainingDays +"<br></p>");
document.write("<p class=f>Hours: " + remainingHours+"<br></p>");
document.write("<p class=f>Minutes: " + remainingMinutes +"<br></p>");
document.write("<p class=f>Seconds: " + remainingSeconds +"<br></p>");
document.write("<p class=f> <strong>Eid ul-Adha will be on: " + eidUlAdhaDayOfWeek +"<strong></p>");
