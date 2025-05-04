

    document.querySelector('.hamburger-menu').addEventListener('click', function() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
    });

const quizQuestions = [
    {
        question: "Q1: What is the capital of France?",
        option1: "Paris",
        option2: "London",
        option3: "Rome",
        correctOption: "option1"
    },
    {
        question: "Q2: What is 2 + 2?",
        option1: "3",
        option2: "4",
        option3: "5",
        correctOption: "option2"
    },
    {
        question: "Q3: Which planet is known as the Red Planet?",
        option1: "Earth",
        option2: "Saturn",
        option3: "Mars",
        correctOption: "option3"
    },
    {
        question: "Q4: What is the largest ocean on Earth?",
        option1: "Atlantic Ocean",
        option2: "Indian Ocean",
        option3: "Pacific Ocean",
        correctOption: "option3"
    },
    {
        question: "Q5: Who wrote 'To Kill a Mockingbird'?",
        option1: "Harper Lee",
        option2: "Mark Twain",
        option3: "Ernest Hemingway",
        correctOption: "option1"
    }
];
var getQ = document.getElementById('questions');
var getO1 = document.getElementById('opt1');
var getO2 = document.getElementById('opt2');
var getO3 = document.getElementById('opt3');
var getOptions = document.getElementsByName('option');
var nextBtn = document.getElementById('btnNext');

var index = 0;
var score = 0;
var min = 1;
var sec = 59;
var timer = document.getElementById('timer')


    // var interval = setInterval(function(){
        timer.innerHTML = `Timer:  ${min} : ${sec} `;
        sec--;
        if (sec < 0) {
            min--;
            sec = 59;
            
             if (min < 0) {
                sec =59;
                min = 1;
                next();
            }
        }  
    //  }, 100);

 
function next() {
    if (index > 0) { 
        for (var i = 0; i < getOptions.length; i++) {
            if (getOptions[i].checked) {
    
                var selectValue = 'option' + getOptions[i].value;
                var correctOption = quizQuestions[index - 1]['correctOption'];
                if (selectValue === correctOption) {
                    score++;
                }
            }
            getOptions[i].checked = false;
        }
        nextBtn.disabled = true
    }
    if (index >= quizQuestions.length) {
        console.log("Percentage is " + ((score / quizQuestions.length) * 100).toFixed(2) + "%");
        showResult(score,quizQuestions.length)
        // alert("Quiz Over! Your score is " + score + " out of " + quizQuestions
        //     .length);

            clearInterval(interval);
            
   
    } else {
        getQ.innerText = quizQuestions[index].question;
        getO1.innerText = quizQuestions[index].option1;
        getO2.innerText = quizQuestions[index].option2;
        getO3.innerText = quizQuestions[index].option3;
        index++;
            min = 1;
            sec = 59;
    }
}
function clicked() {
  
    nextBtn.disabled = false;

}
next();

function showResult(score, total) {
  var quizresult =  document.getElementById('quizResult')
quizresult.innerText = `${((score / total) * 100).toFixed(1)}%`
        // quizresult.innerText = `You scored ${score}/${total}!`;
    document.getElementById('resultPopup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('resultPopup').style.display = 'none';
}