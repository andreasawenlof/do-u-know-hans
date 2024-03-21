const correctScoreTotal = Number(localStorage.getItem('correctScore'));
const incorrectScoreTotal = Number(localStorage.getItem('incorrectScore'));

document.getElementById('correctScore').innerHTML = `Correct<br> Answers: ${correctScoreTotal}`;
document.getElementById('incorrectScore').innerHTML = `Incorrect<br> Answers: ${incorrectScoreTotal}`;

const nameInputSubmit = localStorage.getItem('name');
document.getElementById('goodJobName').innerHTML = `Well done, ${nameInputSubmit.toUpperCase()}!`;

function playAgain() {
    localStorage.removeItem('correctScore');
    localStorage.removeItem('incorrectScore');
    window.location.href = 'quiz.html';
}

document.getElementById('play-again').addEventListener('click', playAgain);