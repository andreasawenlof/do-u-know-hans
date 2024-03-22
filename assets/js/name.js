const nameInput = document.getElementById('name');
const submit = document.getElementById('submit-button');

function onSubmitButtonClick() {
    const nameInputSubmit = document.getElementById('name').value;
    localStorage.setItem('name', nameInputSubmit);
    window.location.href = 'quiz.html';
}

function submitButtonDisable() {
    const nameField = document.getElementById('name').value;
    if(nameField !== '') {
        submit.disabled = false;
    } else if (nameField === '') {
        submit.disabled = true;
    }

}

submit.disabled = true;


nameInput.addEventListener('keyup', submitButtonDisable);
submit.addEventListener('click', onSubmitButtonClick);