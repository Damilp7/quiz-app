const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");
const resultDiv = document.getElementById("result");

let shuffledQuestions, currentQuestionIndex, score;

const questions = [
  {
    question: "The West African crowned crane is the national bird of which country?",
    answers: [
      {text: "Ghana", correct: false},
      {text: "Cameroon", correct: false},
      {text: "Togo", correct: false},
      {text: "Nigeria", correct: true},
    ],
  },
  {
    question: "What color do you get when you mix blue and green?",
    answers: [
      {text: "Teal", correct: true},
      {text: "Orange", correct: false},
      {text: "Violet", correct: false},
      {text: "indigo", correct: false},
    ],
  },
  {
    question: "What is the capital of Lagos state?",
    answers: [
      {text: "Isolo", correct: false},
      {text: "Ikeja", correct: true},
      {text: "Ikorodu", correct: false},
      {text: "Ifako", correct: false},
    ],
  },
  {
    question: "In what mythology is Odin found?",
    answers: [
      {text: "Greek mythology", correct: false},
      {text: "Norse mythology", correct: true},
      {text: "Roman mythology", correct: false},
      {text: "Hindu mythology", correct: false},
    ],
  },
  {
    question: "'Now I am become Death, the Destroyer of Worlds.' Where did this text originate from?",
    answers: [
      {text: "Ares the god of war", correct: false},
      {text: "J. Robert Oppenheimer", correct: false},
      {text: "Odin the god of war and death", correct: false},
      {text: "Bhagavad Gita", correct: true},
    ],
  },
  {
    question: "In the Harry Potter series, what was Voldemort's real name?",
    answers: [
      {text: "Tom Maverick Huddlestone", correct: false},
      {text: "Tardius Monroe Salazar", correct: false},
      {text: "Tom Marvolo Riddle", correct: true},
      {text: "Tardius Mordrid Raven", correct: false},
    ],
  },
  {
    question: "What is the name of Black Leg Sanji's sister?",
    answers: [
      {text: "Reiju Vinsmoke", correct: true},
      {text: "Rhena Vinsmoke", correct: false},
      {text: "Reily Vinsmoke", correct: false},
      {text: "Rhinu Vinsmoke", correct: false},
    ],
  },
  {
    question: "What is the name of Lola and Chiffon Charlotte's father?",
    answers: [
      {text: "Pround", correct: true},
      {text: "Prand", correct: false},
      {text: "Pedro", correct: false},
      {text: "Pound", correct: true},
    ],
  },
];

startQuiz();

function startQuiz(){
  score = 0;
  questionContainer.style.display = "flex";  
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  nextButton.classList.remove("hide");
  restartButton.classList.add("hide");
  resultDiv.classList.add("add");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer, index) => {
    const inputGroup = document.createElement("div");
    inputGroup.classList.add("input-group");

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.id = "answer" + index;
    radio.name = "answer";
    radio.value = index;

    const label = document.createElement("label");
    label.htmlFor = "answer" + index;
    label.innerText = answer.text;

    inputGroup.appendChild(radio);
    inputGroup.appendChild(label);
    answerButtons.appendChild(inputGroup);
    });
}

function resetState(){
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild)
  } 
}

nextButton.addEventListener("click", () => {
  const answerIndex = Array.from(
    answerButtons.querySelectorAll("input")
  ).findIndex((radio) => radio.checked);
  if (answerIndex !== -1) {
    if(shuffledQuestions[currentQuestionIndex].answers[answerIndex].correct) {
      score++;
    }
    currentQuestionIndex++;
    if (shuffledQuestions.length > currentQuestionIndex) {
      setNextQuestion();
    } else {
      endQuiz();
    }
  } else {
    alert("Answer has not been selected!");
  }
}); 

restartButton.addEventListener("click", startQuiz);

function endQuiz() {
  questionContainer.style.display = "none";
  nextButton.classList.add("hide");
  restartButton.classList.remove("hide");
  resultDiv.classList.remove("hide");
  resultDiv.innerText = `You scored: ${score} / ${shuffledQuestions.length}`;
}

