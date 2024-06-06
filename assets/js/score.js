/**
 * Store information from local storage in a variable
 * Getting score from local storage
 */
const correctScoreTotal = Number(localStorage.getItem('correctScore'));
const incorrectScoreTotal = Number(localStorage.getItem('incorrectScore'));

/**
 * Use score-variable to input score in html
 */
const correctScore = document.getElementById('correctScore');
const incorrectScore = document.getElementById('incorrectScore');
correctScore.innerHTML = `<span>${correctScoreTotal}</span> Correct <br>Answers `;
incorrectScore.innerHTML = `<span>${incorrectScoreTotal}</span> Incorrect <br>Answers`;

/**
 * Get name from localstorage and stores it in a variable
 */
const nameInputSubmit = localStorage.getItem('name');
document.getElementById('goodJobName').innerHTML = `Well done, ${nameInputSubmit.toUpperCase()}!`;

/**
 * Function for a Play Again button
 * Button resets score in local storage
 * Button also links user to the start of the quiz again
 */
function playAgain() {
    localStorage.removeItem('correctScore');
    localStorage.removeItem('incorrectScore');
    window.location.href = 'quiz.html';
}

// Click event triggers function playAgain
document.getElementById('play-again').addEventListener('click', playAgain);