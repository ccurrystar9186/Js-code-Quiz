var timeLeft = 60
var points = 0;
let seconds;
var secondsremaining = document.getElementById("demo");
var saveButton = document.getElementById("saveButton");
var userName = document.getElementById("userName");

//document.createElement()

//appendChild()

//how to create dynamic html elemts and append them onto the html



secondsremaining.innerHTML = timeLeft;

function show_question(qn) {
  let html = questions[qn].question;
  html += `<br><button onclick='show_question(${qn + 1})'>NEXT QUESTION!</button>`;
  main_div.innerHTML = html;
}

let questions = [
 questionOne = {
    question: "Arrays in JavaScript can be used to store?",
    answerArray:["numbers and strings", "other arrays", "booleans", "All the above" ],
    correct: "All the above"
  },
  questionTwo = { 
    question: "What is a Boolean?",
    answerArray:['jerry', 'mike','joe','sophie'],
    correct:"sophie"
  },
  questionThree = { 
    question: "Let's try to answer the question again?",
    answerArray:['jerry', 'mike','joe','sophie'],
    correct:"jerry"
  }
];


function startTimer() {
  seconds = timeLeft;
  let timer = setInterval(function () {
    seconds--

    secondsremaining.textContent = seconds;

    if (timeLeft === 0) {
      clearInterval(timer)

    }
  }, 1000)
}

// Example of a simple array -- collection of objects
//let arr = ["circle","square","triangle","oval"];

let main_div = document.getElementById("alert");
let question_number = 0;
show_question(question_number);