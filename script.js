//99Untuk pertanyaan dan jawaban
const questions = [
        {
            question: "who i want to kill?",
            answers: [
                {text: "Nakajima Atsushi", correct: false},
                {text: "Haruhi", correct: false},
                {text: "Tsukasa YUGI", correct: true},
                {text: "Roderich Edelstein", correct: false}
            ]
        },
    
        {
            question: "who i want to ???",
            answers: [
                {text: "Nakajima Atsushi", correct: false},
                {text: "Haruhi", correct: false},
                {text: "Tsukasa YUGI", correct: false},
                {text: "Roderich Edelstein", correct: true}
            ]
        }
    ]

//Agar bisa mengisi pertanyaan dan jawaban kosong?
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

//untuk setting score dan pertanyaan awal
let currentQuestionIndex = 0;
let score = 0;

//untuk ngeset score ke awal
function startQuiz(){
    resetState();
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answers => {
        const button= document.createElement("button");
        // answer.text, untuk mengisi teks jawaban ke button
        button.innerHTML = answers.text;
        //Child untuk mengatur isi Parent, seperti div, section, ul, dll?
        answerButton.appendChild(button);
        button.dataset.correct = answers.correct;
        button.addEventListener("click", selectAnswer)
    });
}

//untuk reset tampilan sebelum pertanyaan baru muncul
function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

//buat ngasih warna?
function selectAnswer(e){
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if(isCorrect){
        //classList untuk menambah class untuk css
        selectedButton.classList.add("correct");

    } else {
        selectedButton.classList.add("incorrect");
    }
    
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display="block";

    } 

startQuiz();
//If you're code is not working then call the startquiz function in the last