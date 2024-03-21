const correctScoreTotal = localStorage.getItem('correctScore');
const incorrectScoreTotal = localStorage.getItem('incorrectScore');

document.getElementById('correctScore').innerHTML = `Correct Answers: ${correctScoreTotal}`;
document.getElementById('incorrectScore').innerHTML = `Wrong Answers: ${incorrectScoreTotal}`;

function playAgain() {
    localStorage.clear();
    window.location.href = 'quiz.html';
}

document.getElementById('play-again').addEventListener('click', playAgain);