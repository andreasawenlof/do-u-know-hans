const correctScoreTotal = localStorage.getItem('correctScore');
const incorrectScoreTotal = localStorage.getItem('incorrectScore');

document.getElementById('correct-score').innerHTML = `Correct Answers: ${correctScoreTotal}`;
document.getElementById('incorrect-score').innerHTML = `Wrong Answers: ${incorrectScoreTotal}`;