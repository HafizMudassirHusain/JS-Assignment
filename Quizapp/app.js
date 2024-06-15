const quizQuestions = [
    {
        question: "What is the capital of France?",
        option1: "Paris",
        option2: "London",
        option3: "Rome",
        correctOption: "option1"
    },
    {
        question: "What is 2 + 2?",
        option1: "3",
        option2: "4",
        option3: "5",
        correctOption: "option2"
    },
    {
        question: "Which planet is known as the Red Planet?",
        option1: "Earth",
        option2: "Saturn",
        option3: "Mars",
        correctOption: "option3"
    },
    {
        question: "What is the largest ocean on Earth?",
        option1: "Atlantic Ocean",
        option2: "Indian Ocean",
        option3: "Pacific Ocean",
        correctOption: "option3"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
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

var nextBtn = document.getElementById('btnNext');


var index = 0;
var score = 0;

function next(){
    var getOptions = document.getElementsByName('option');
  
    for(var i = 0 ;i<getOptions.length; i++){
       if(getOptions[i].checked){
        var selectedValue = getOptions[i].value
        var selectedques = quizQuestions[index - 1]['question']
        var selectedAns = quizQuestions[index - 1][`option${selectedValue}`]
        var correctOPtion = quizQuestions[index - 1]['correctOption']
        if(selectedAns == correctOPtion){
            score++
        }
        console.log(selectedAns)
       }
        getOptions[i].checked = false
    }
    nextBtn.disabled = true;
       
        if(index > quizQuestions.length - 1){
            console.log('percentage : ' + ((score / quizQuestions.length)*100).toFixed(1))
        } 
        else{
            getQ.innerText = quizQuestions[index].question;
            getO1.innerText = quizQuestions[index].option1;
            getO2.innerText = quizQuestions[index].option2;
            getO3.innerText = quizQuestions[index].option3;
            index++
        }
}
next()
function clicked(){
    nextBtn.disabled = false;
}

