
function enterPage() {
    window.location.href = 'name.html';    
}
document.getElementById('enterButton').innerHTML = 'ENTER THE GAME';

function howTo() {
    window.location.href = 'howto.html';
}

document.getElementById('howTo').innerHTML = 'HOW TO PLAY';

function eventHandler() {
    document.getElementById('enterButton').addEventListener('click', enterPage);
    document.getElementById('howTo').addEventListener('click', howTo);
}

eventHandler();
