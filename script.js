    //99Untuk pertanyaan dan jawaban
const questions = [
        {
            question: "Alat musik yang dimainkan dengan cara dipetik adalah ...",
            answers: [
                {text: "Drum", correct: false},
                {text: "Gitar", correct: true},
                {text: "Biola", correct: false},
                {text: "Suling", correct: false}
            ]
        },
        {
            question: "Angklung berasal dari …",
            answers: [
                {text: "Bali", correct: false},
                {text: "Papua", correct: false},
                {text: "JAWA Barat", correct: true},
                {text: "Kalimantan", correct: false}
            ]
        },
        {
            question: "Biola dimainkan dengan cara...",
            answers: [
                {text: "Digesek", correct: true},
                {text: "Dipukul", correct: false},
                {text: "Ditiup", correct: false},
                {text: "Dipetik", correct: false}
            ]
        },
        {
            question: "Contoh alat musik ditiup adalah...",
            answers: [
                {text: "Kendang", correct: false},
                {text: "Seruling", correct: true},
                {text: "Gitar", correct: false},
                {text: "Piano", correct: false}
            ]
        },
        {
            question: "Piano termasuk alat musik...",
            answers: [
                {text: "Ritmis", correct: false},
                {text: "Melodis", correct: true},
                {text: "Tiup", correct: false},
                {text: "Pukul", correct: false}
            ]
        },
        {
            question: "Kendang dimainkan dengan cara...",
            answers: [
                {text: "Ditiup", correct: false},
                {text: "Dipetik", correct: false},
                {text: "Dipukul", correct: true},
                {text: "Digesek", correct: false}
            ]
        },
        {
            question: "Contoh alat musik tradisional indonesia adalah...",
            answers: [
                {text: "Biola", correct: false},
                {text: "Angklung", correct: true},
                {text: " Piano", correct: false},
                {text: "Trompet", correct: false}
            ]
        },
        {
            question: "Fungsi alat musik ritmis adalah...",
            answers: [
                {text: "Mengatur irama", correct: true},
                {text: "Menghias Panggung", correct: false},
                {text: "Mengatur lampu", correct: false},
                {text: "Menghafal lagu", correct: false}
            ]
        },
        {
            question: "Gitar menghasilkan bunyi dari...",
            answers: [
                {text: "Gagang pintu", correct: false},
                {text: "Senar", correct: true},
                {text: "Semen", correct: false},
                {text: "Kambing", correct: false}
            ]
        },
        {
            question: "Drum termasuk alat musik...",
            answers: [
                {text: "Melodis", correct: false},
                {text: "Harmonis", correct: false},
                {text: "Ritmis", correct: true},
                {text: "Petik", correct: false}
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

        button.classList.add("btn"); //untuk menyambung dengan class btn(.btn)

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

function tambahSoal() {
    const soal = prompt("Masukkan soal:");

    const a = prompt("Jawaban A:");
    const b = prompt("Jawaban B:");
    const c = prompt("Jawaban C:");
    const d = prompt("Jawaban D:");

    const benar = prompt(
        "Jawaban benar? (A/B/C/D)"
    );
    //hasil input dari prompt hampir semua dibaca sebagai string

    if (benar === null) return

    const jawabanBenar = benar.toUpperCase(); // toUpperCase membuat huruf menjadi kapital semuaaa

    questions.push({ // push digunakan untuk menambah data di akhir array
        question: soal,
        answers: [
            {text: a, correct: jawabanBenar === "A"},
            {text: b, correct: jawabanBenar === "B"},
            {text: c, correct: jawabanBenar === "C"},
            {text: d, correct: jawabanBenar === "D"} // untuk mengecek true atau false berdasarkan hasil input
        ]
    });

    //untuk menyimpan soal di local?
    localStorage.setItem(
        "questions",
        JSON.stringify(questions)
    );

    alert("Soal berhasil disimpan!");
}


function hapusSoal() {
    let daftar = "";

    questions.forEach((soal, index) => {
        daftar += `${index + 1}. ${soal.question}\n`;
    });

    const nomor = prompt(
        `Daftar soal:\n\n${daftar}\n Masukkan nomor soal yang ingin dihapus:`
    );
    // \n digunakan untuk menambahkan baris baru

    if (nomor === null) return;

    const index = parseInt(nomor) - 1; //parseInt digunakan mengubah string ke integer, ada juga parseFloat
    // -1 digunakan untuk mengurangi angka yang di input sebanyak 1

    if (isNaN(index) || index < 0 || index >= questions.length) {
        alert("Nomor tidak valid!");
        return;
    } //isNaN digunakan untuk mengecek mana yg bukan angka

    questions.splice(index, 1); //splice digunakan untuk menambah, menghapus, atau mengganti isi array

    localStorage.setItem(
        "questions",
        JSON.stringify(questions)
    );

    alert("Soal berhasil dihapus!");
}

//let=bisa diubah nilainya; const= nilai tetap dan tidak bisa diubah, tetapi isi object/array masih bisa diubah
//forEach untuk mengulang setiap isi array satu - persatu