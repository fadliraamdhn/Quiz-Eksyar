const questions = [
    {
        question: "Pajak yang dibebankan kepada orang kafir yang tinggal di wilayah kekuasaan Islam dengan tujuan untuk melindungi diri orang kafir dari serangan musuh disebut?",
        answers: [
            { text: "Kharaj", correct: false},
            { text: "jizyah", correct: true},
            { text: "Zakat", correct: false},
            { text: "Fa'i", correct: false},
        ]
    },
    {
        question: "Kitab yang banyak membahas tentang keuangan publik yang bernama kitab al amwal adalah karya dari?",
        answers: [
            { text: "Abu Ubaid", correct: true},
            { text: "Al-Ghazali", correct: false},
            { text: "Al-Maqrizi", correct: false},
            { text: "Imam Syatibi", correct: false},
        ]
    },
    {
        question: "Yang dilarang dalam transaksi keuangan syariah adalah?",
        answers: [
            { text: "Maysir", correct: true},
            { text: "Muamalah", correct: false},
            { text: "Zakat", correct: false},
            { text: "Hutang", correct: false},
        ]
    },
    {
        question: "Yang termasuk bagian dari maqosid syariah adalah?",
        answers: [
            { text: "Menjaga hati", correct: false},
            { text: "Menjaga lisan", correct: false},
            { text: "Menjaga harta", correct: false},
            { text: "Menjaga keamanan", correct: true},
        ]
    },
    {
        question: "Akad pada produk simpanan dana di bank syariah adalah?",
        answers: [
            { text: "Salam", correct: false},
            { text: "Wadiah", correct: true},
            { text: "Istishna", correct: false},
            { text: "Qardh", correct: false},
        ]
    },
    {
        question: "Yang merupakan produk di Pasar Modal Syariah?",
        answers: [
            { text: "Deposito", correct: false},
            { text: "Bakso", correct: false},
            { text: "Asuransi kematian", correct: false},
            { text: "Saham", correct: true},
        ]
    },
    {
        question: "Apa kepanjangan dari OJK?",
        answers: [
            { text: "Otomasi Jangkauan Kerja", correct: false},
            { text: "Otoriter Jokowi Keren", correct: false},
            { text: "Otoritas Jasa Keuangan", correct: true},
            { text: "Otoritas Jasa Kelembagaan", correct: false},
        ]
    },
    {
        question: "Yang termasuk produk sukuk adalah?",
        answers: [
            { text: "ST12", correct: false},
            { text: "SR15", correct: true},
            { text: "SW01", correct: false},
            { text: "S5TANK", correct: false},
        ]
    },
    {
        question: "Dewan Pengawas Syariah secara umum bertugas untuk?",
        answers: [
            { text: "Memonitor pakaian karyawan LKS", correct: false},
            { text: "Memonitor disiplin pimpinan LKS", correct: false},
            { text: "Memastikan transaksi operasional LKS sesuai dengan prinsip syariah", correct: true},
            { text: "Membuat laporan keuangan LKS", correct: false},
        ]
    },
    {
        question: "Yang merupakan penerapan akad ijarah",
        answers: [
            { text: "Jual beli emas", correct: false},
            { text: "Sewa alat berat", correct: true},
            { text: "Expor pakaian", correct: false},
            { text: "Penjualan makanan ", correct: false},
        ]
    },
];

const startButton = document.getElementById("start")
const rules = document.getElementById("rules-container")
const newStart = document.getElementById("start-button")
const playButton = document.getElementById("play")
const think = document.getElementById("noplay")
const container = document.getElementById("container")
const questionTitle = document.getElementById("question-text")
const answerButtons = document.getElementById("answer-button")
const nextButton = document.getElementById("next-btn")
const quizContainer = document.getElementById("quiz-container-active")

// fungsi memanggil rules
startButton.addEventListener("click", () => {
    rules.classList.remove("hidden");
    newStart.classList.add("hidden");
    document.getElementById("back").remove();
});

//fungsi kembali ke start
think.addEventListener("click", () => {
    rules.classList.add("hidden");
    newStart.classList.remove("hidden");
});

//fungsi ke quiz
playButton.addEventListener("click", () => {
    rules.classList.add("hidden");
    container.classList.remove("active");
    startQuiz();
});

let currentQuestionIndex = 0;
let score = 0;

function startQuiz () {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "NEXT";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionTitle.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
        finalScore = score * 10;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionTitle.innerHTML = `SELAMAT KAMU MENDAPATKAN NILAI <br> ${finalScore}`;
    const inputButton = document.createElement("button");
    inputButton.innerHTML = "Kembali";
    inputButton.setAttribute("id", "back");
    document.getElementById("quiz-container-active").appendChild(inputButton);

    const home = document.getElementById("back")
    back.addEventListener("click", () => {
        newStart.classList.remove("hidden");
        container.classList.add("active");
    });
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();




