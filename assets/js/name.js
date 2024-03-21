const nameInput = document.getElementById('name');
const submit = document.getElementById('submitName');

function submitName() {
    const nameInputSubmit = document.getElementById('name').value;
    nameInputSubmit.toUpperCase();
    console.log('nameInput', nameInputSubmit);
    localStorage.setItem('name', nameInputSubmit);
    window.location.href = 'quiz.html';
}

submit.addEventListener('click', submitName);