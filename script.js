let index = 0;

function updateButtons() {
    const prevButton = document.querySelector(".prev");
    const images = document.querySelectorAll(".slides img");
    prevButton.style.display = index === 0 ? "none" : "flex";
}

function showSlide(n) {
    const slides = document.querySelector(".slides");
    const images = document.querySelectorAll(".slides img");
    if (n >= images.length) index = 0;
    if (n < 0) index = images.length - 1;
    slides.style.transform = `translateX(${-index * 100}%)`;
    updateButtons();
}

document.querySelector(".prev").addEventListener("click", () => {
    index--;
    showSlide(index);
});

document.querySelector(".next").addEventListener("click", () => {
    index++;
    showSlide(index);
});

window.onload = () => {
    showSlide(index);
};


const quizData = [
    {
        question: "Qual é a capital do Brasil?",
        options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
        correct: 0
    },
    {
        question: "Qual é o maior planeta do Sistema Solar?",
        options: ["Terra", "Júpiter", "Marte", "Vênus"],
        correct: 0
    },
    {
        question: "Quem pintou a Mona Lisa?",
        options: ["Van Gogh", "Leonardo da Vinci", "Picasso", "Michelangelo"],
        correct: 0
    },
    {
        question: "Quantos continentes existem?",
        options: ["5", "6", "7", "8"],
        correct: 0
    },
    {
        question: "Qual é o elemento químico mais abundante na atmosfera terrestre?",
        options: ["Oxigênio", "Hidrogênio", "Nitrogênio", "Carbono"],
        correct: 0
    },
    {
        question: "Quem escreveu 'Dom Casmurro'?",
        options: ["Machado de Assis", "José de Alencar", "Clarice Lispector", "Guimarães Rosa"],
        correct: 0
    },
    {
        question: "Qual é o idioma mais falado no mundo?",
        options: ["Inglês", "Mandarim", "Espanhol", "Hindu"],
        correct: 0
    },
    {
        question: "Qual é a moeda oficial dos Estados Unidos?",
        options: ["Euro", "Dólar", "Libra", "Peso"],
        correct: 0
    },
    {
        question: "Quem foi o primeiro homem a pisar na Lua?",
        options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"],
        correct: 0
    },
    {
        question: "Quantos segundos há em uma hora?",
        options: ["360", "3600", "600", "6000"],
        correct: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");

function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionContainer.innerHTML = `
        <h3>${currentQuestion.question}</h3>
        ${currentQuestion.options.map((option, index) => `
            <label>
                <input type="radio" name="answer" value="${index}">
                ${option}
            </label><br>
        `).join("")}
    `;
}

function showResults() {
    questionContainer.innerHTML = `
        <h3>Você acertou ${score} de ${quizData.length} perguntas.</h3>
        <p>${score > 7 ? "Parabéns! Você foi muito bem!<br><a href='https://open.spotify.com/intl-pt/track/77uKOPe9LycSfrXCKqfJp2?si=b89aa6052dff41cc' target='_blank'>Clique aqui</a>" 
            : "Tente novamente para descobrir seu presente."}</p>
    `;
    nextButton.style.display = "none";
    restartButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Por favor, selecione uma resposta.");
        return;
    }
    const answer = parseInt(selectedOption.value);
    if (answer === quizData[currentQuestionIndex].correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        showResults();
    }
});

restartButton.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = "block";
    restartButton.style.display = "none";
    showQuestion();
});

window.onload = showQuestion;
