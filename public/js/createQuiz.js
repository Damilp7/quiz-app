window.addEventListener("load", async (e) => {
    const submitBtn = document.getElementById("submit-btn");
    const questionInput = document.getElementById("question");
    const answersDiv = document.querySelector(".answer-div");
    const mainQuizDiv = document.querySelector(".quiz");
    const startQuizBtn = document.querySelector(".welcome-msg button");
    const welcomeMsgDiv = document.querySelector(".welcome-msg");
    const scoreBoardDisp = document.querySelector(".score-board h1");

    // STYLING START
    // startQuizBtn.style.backgroundColor = "purple";
    // STYLING END

    const data = await getData()
    const { quizzes } = data;
    const shuffledQuizzes = [...quizzes];
    shuffledQuizzes.sort(() => Math.random() - 0.5);

    let currentQuestionIndex = 0;
    let score = 0;
    let referenceArray = [];
    let referenceRandomArray = [];

    startQuizBtn.addEventListener("click", (e) => {
        welcomeMsgDiv.remove();
        mainQuizDiv.style.display = "block";
        scoreBoardDisp.innerText = "Score: 0"
        startQuiz();
    })


    async function getData() {
        const response = await fetch("/start-quiz");
        const data = await response.json();
        console.log(data);
        return data;
    }

    function startQuiz() {
        setNextQuestion();
    }

    function setNextQuestion() {
        resetState();
        showQuestion(shuffledQuizzes[currentQuestionIndex]);
    }

    function showQuestion(question) {
        questionInput.innerText = question.question;
        const { options } = question;
        referenceArray = [...options];
        referenceRandomArray = options;
        options.sort(() => Math.random() - 0.5);
        options.forEach((answer, index) => {
            const answerDiv = document.createElement("div");
            const radio = document.createElement("input");
            const label = document.createElement("label");
            answerDiv.setAttribute("class", "answer-set");
            radio.setAttribute("class", "answer-radio");
            label.setAttribute("class", "answer-label fs-4")
            radio.type = "radio";
            radio.value = index;
            radio.name = "answer";
            radio.id = `answer-${index}`;

            label.htmlFor = `answer-${index}`;
            label.innerText = answer;


            answersDiv.append(answerDiv);
            answerDiv.append(radio, label);
            submitBtn.style.display = "block"
        });

    };

    function resetState() {
        while (answersDiv.firstChild) {
            answersDiv.removeChild(answersDiv.firstChild);
        }
    };

    submitBtn.addEventListener("click", (e) => {

        const answerIndex = (Array.from(document.querySelectorAll("input[type=radio]")).findIndex(radio => radio.checked));
        if (referenceRandomArray[answerIndex] === referenceArray[0]) {
            score++;
            scoreBoardDisp.innerText = `Score: ${score}`;
            endResult();

        } else {
            endResult();
        }

        function endResult() {
            currentQuestionIndex++;
            if (currentQuestionIndex === quizzes.length) {

                while (mainQuizDiv.firstChild) {
                    mainQuizDiv.removeChild(mainQuizDiv.firstChild);
                }
                const result = document.createElement("h2");
                result.innerText = `Your final score is ${score}/${quizzes.length}`;
                scoreBoardDisp.style.display = "none"
                mainQuizDiv.append(result);
            } else {
                setNextQuestion();
            }
        }
    })
})


