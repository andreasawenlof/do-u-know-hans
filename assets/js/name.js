//Determine variables of name-field and submit-button
const nameInput = document.getElementById('name');
const submit = document.getElementById('submit-button');

/**
 * When submit button is clicked, information in the input field gets store in local storage
 * Redirects user to the quiz
 */
function onSubmitButtonClick() {
    const nameInputSubmit = document.getElementById('name').value;
    localStorage.setItem('name', nameInputSubmit);
    window.location.href = 'quiz.html';
}

/**
 * Disables the submit button when the name field is empty.
 * Submit button gets enabled when the field has information in it
 */
function submitButtonDisable() {
    const nameField = document.getElementById('name').value;
    if(nameField !== '') {
        submit.disabled = false;
    } else if (nameField === '') {
        submit.disabled = true;
    }

}

//Disable Submit button by default when loading page
submit.disabled = true;

//Event listener triggers the submitButtonDisable function on keyup
nameInput.addEventListener('keyup', submitButtonDisable);

//Event listener triggers function: onSubmitButtonClick when button gets clicked.
submit.addEventListener('click', onSubmitButtonClick);