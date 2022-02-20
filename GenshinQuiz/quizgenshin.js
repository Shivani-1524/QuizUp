
const options = document.querySelectorAll(".options")
const scoreOutput = document.querySelector(".score")
const btnQuizSubmit = document.querySelector("#btn-quiz-submit")
const quizAnswer = [1, 0, 1, 0, 2];
let optNumber = 0;
let qnum = 0;
let score = 0;
scoreOutput.style.display = "none";
btnQuizSubmit.addEventListener('click', () => {
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
    btnQuizSubmit.style.display = "none"
})
