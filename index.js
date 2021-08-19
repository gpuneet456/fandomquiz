var readlineSync = require('readline-sync');
var userName = readlineSync.question('May I have your name? ');
console.log("Welcome " + userName + " to Naruto Trivia\n");
var score = 0;

var highScores = [
  {
    name: "Puneet",
    score: "5"
  },
  {
    name: "Divya",
    score: "4"
  }
]
function validate_answer(question, answer) {
  if (question.answer.option.toLowerCase() === answer.toLowerCase() ||question.answer.word.toLowerCase() === answer.toLowerCase() ) {
    score++;
    console.log("Right!!");
  }
  else {
    console.log("Wrong!!");
  }
  console.log("Current Score is " + score);
  console.log("-----------------");
}
questionOne = {
    question: `Who is terrified of Toads?
  a: Shino
  b: Sakura
  c: Naruto
  d: Kiba Inuzuka`,
  answer: {option:"b",word:"Sakura"}
}
questionTwo = {
  question: `What is the name of Kakashi’s smallest Ninken?
  a: Urushi
  b: Shiba
  c: Pakkun
  d: Bisuke`,
 
  answer: {option:"c",word:"Pakkun"}
}
questionThree = {
  question: `What is Naruto’s catchphrase?
  a: Believe it!
  b: Fool, you fool.
  c: Sorry, I'm late.
  d: What a drag.`,
  answer: {option:"a",word:"Believe it!"}
}
questionFour = {
  question: `How old was Naruto in the original Naruto?
  a: 10
  b: 12
  c: 13
  d: 15`,
 
  answer: {option:"b",word:"12"}
}
questionFive = {
    question: `Who was the youngest ninja graduate from the academy?
  a: Rin
  b: Obito
  c: Kakashi
  d: Itachi`,

  answer: {option:"c",word:"Kakashi"}
}

var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];

for (var i = 0; i < questions.length; i++) {
  var ques = questions[i];
  var ans = readlineSync.question(ques.question + "\n");
  validate_answer(ques, ans);
}
console.log("YAY!! Your Score is " + score);

console.log("Check out the high scores")
for (var j = 0; j < highScores.length; j++) {
  console.log(highScores[j].name + " " + highScores[j].score);
}


