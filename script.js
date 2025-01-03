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
        question: "Qual o nome do amor da sua vida?",
        options: ["Leirbag", "Sla", "Gabriel Hamilton Nunes", "Itaquaxiara"],
        correct: 2
    },
    {
        question: "Qual vai ser o nome do nosso cachorro?",
        options: ["Biruleibe", "Jonathan Alberto", "Jonazinho", "Hot dog"],
        correct: 1
    },
    {
        question: "Qual dia nós fomos para porto?",
        options: ["21", "20", "22", "23"],
        correct: 2
    },
    {
        question: "Quantos beijos vc me deve?",
        options: ["0", "1", "1000", "mais de 1 milhão por dia"],
        correct: 3
    },
    {
        question: "Qual o ano do nosso primeiro beijo?",
        options: ["2017", "2022", "2023", "2024"],
        correct: 1
    },
    {
        question: "Qual é o nosso dia?",
        options: ["13", "6", "11", "9"],
        correct: 3
    },
    {
        question: "Qual a melhor praia que ja fomos?",
        options: ["Praia grande", "Arraial", "Coroa vermelha", "Copacabana"],
        correct: 2
    },
    {
        question: "Quem é o governador da bahia?",
        options: ["Davi Calabreso", "Calma vida ta de boa", "Oxente Pereira", "Lá ele da Silva"],
        correct: 3
    },
    {
        question: "Qual a altura do lebron james?",
        options: ["2,06", "2,02", "2,04", "2,08"],
        correct: 0
    },
    {
        question: "Quer ver seu presente?",
        options: ["Nem quero", "Talvez", "SIM mas quero te beijar antes", "Sim"],
        correct: 2
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
