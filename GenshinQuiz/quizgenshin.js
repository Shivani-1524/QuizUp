
const options = document.querySelectorAll(".options");
const scoreOutput = document.querySelector(".score");
const btnQuizSubmit = document.querySelector("#btn-quiz-submit");
const timeUpSubmit = document.querySelector("#time-up-submit");
const modalTimer = document.getElementById("modal-wrapper");
const timerText = document.getElementById("timer-txt");
const quizAnswer = [2, 0, 0, 1, 0];
let optNumber = 0;
let qnum = 0;
let score = 0;
scoreOutput.style.display = "none";
modalTimer.style.display = "none";

window.onload = () => {
    let timerSeconds = 10;
    startTimer(timerSeconds, timerText);
}


const startTimer = (duration, display) => {
    let timer = duration, minutes, seconds;
    const startTimerId = setInterval(function () {
        console.log(timer);
        // HOW DOES THE TIMER DECREMENT ?
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            modalTimer.style.display = "flex"
            clearInterval(startTimerId)
        }
    }, 1000);
}

timeUpSubmit.addEventListener('click', () => {
    modalTimer.style.display = "none";
    btnQuizSubmit.style.display = "none"
    calcScore();
})


btnQuizSubmit.addEventListener('click', () => {
    btnQuizSubmit.style.display = "none"
    calcScore();
})

const calcScore = () => {
    [...options].map((item) => {
        [...item.children].map((option) => {
            option.style.backgroundColor = "var(--light-grey)"
            if (option.firstElementChild.checked === true) {
                option.style.backgroundColor = "var(--red-color)"
                if (quizAnswer[qnum] === (optNumber % 3)) {
                    option.style.backgroundColor = "var(--green-color)"
                    score += 1;
                }
            }
            if (quizAnswer[qnum] === (optNumber % 3)) {
                option.style.backgroundColor = "var(--green-color)"
            }
            optNumber += 1;
        })
        qnum += 1;
    })
    scoreOutput.style.display = "block";
    scoreOutput.innerHTML = `Your Quiz Score : ${score}`
}