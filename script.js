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
        },
        {
            question: "who i want to ???",
            answers: [
                {text: "Nakajima Atsushi", correct: false},
                {text: "Haruhi", correct: false},
                {text: "Tsukasa YUGI", correct: false},
                {text: "Roderich Edelstein", correct: true}
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
        },
        {
            question: "who i want to ???",
            answers: [
                {text: "Nakajima Atsushi", correct: false},
                {text: "Haruhi", correct: false},
                {text: "Tsukasa YUGI", correct: false},
                {text: "Roderich Edelstein", correct: true}
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
        },
        {
            question: "who i want to ???",
            answers: [
                {text: "Nakajima Atsushi", correct: false},
                {text: "Haruhi", correct: false},
                {text: "Tsukasa YUGI", correct: false},
                {text: "Roderich Edelstein", correct: true}
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
        },
        {
            question: "who i want to ???",
            answers: [
                {text: "Nakajima Atsushi", correct: false},
                {text: "Haruhi", correct: false},
                {text: "Tsukasa YUGI", correct: false},
                {text: "Roderich Edelstein", correct: true}
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
    ];
    //99Untuk pertanyaan dan jawaban

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
    //innerHTML dipakai untuk mendapatkan dan mengubah kode isi HTML di dalam elemen, seperti teks dalam html diubah?
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1; //untuk memberi nomer pada setiap soal
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answers => {
        const button= document.createElement("button");
        // answer.text, untuk mengisi teks jawaban ke button
        button.innerHTML = answers.text;
        //Child adalah elemen dalam Parent, seperti div, section, ul, dan sebagainy?
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

//buat ngecek jawaban
function selectAnswer(e){
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if(isCorrect){
        //classList untuk menambah class untuk css
        selectedButton.classList.add("correct");
        score++;
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

function showScore(){
    resetState();

    if(score === questions.length) {
        questionElement.innerHTML = `Selamat nilaimu ${score} dari ${questions.length} 🥳🥳🥳!`;
        nextButton.innerHTML = "Main lagi?";
        nextButton.style.display= "block";
    }else if(score >= 5) {
        questionElement.innerHTML = `Nilaimu ${score} dari ${questions.length}!`;
        nextButton.innerHTML = "Main lagi?";
        nextButton.style.display= "block";
    }else if(score >=3) {
        questionElement.innerHTML = `Yah nilaimu ${score} dari ${questions.length}:(`;
        nextButton.innerHTML = "Main lagi?";
        nextButton.style.display= "block";
    } else{
        questionElement.innerHTML = `${score}/${questions.length} >:(`;
        nextButton.innerHTML = "Main lagi?";
        nextButton.style.display= "block";
    }
}

function handleNextButton(){
    // ++ digunakan untuk increment, menambah nilai variabel sebesar 1
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
}
    
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else{
        startQuiz();
    }
});

startQuiz(); //untuk menjalankan quiz

//let=bisa diubah nilainya; const= nilai tetap, ga bisa diubah