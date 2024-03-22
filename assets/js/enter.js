
function enterPage() {
    window.location.href = 'name.html';    
}

function eventHandler() {
    document.getElementById('enter-button').addEventListener('click', enterPage);
}

eventHandler();
