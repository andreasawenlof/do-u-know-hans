const quizStructure = [
    {
        question: 'Interstellar',
        audio: {
            url: 'assets/audio/interstellar.mp3'
        },
        choices: {
            a: 'choice-one',
            b: 'choice-two',
            c: 'choice-three',
        },
        correctAnswer: 'b'
    },
    {
        question: 'Batman',
        audio: {
            url: 'assets/audio/darkKnight.mp3'
        },
        choices: {
            a: 'choice-one',
            b: 'choice-two',
            c: 'choice-three',
        },
        correctAnswer: 'b'
    },
    {
        question: 'Dune',
        audio: {
            url: 'assets/audio/dune.mp3'
        },
        choices: {
            a: 'choice-one',
            b: 'choice-two',
            c: 'choice-three',
        },
        correctAnswer: 'b'
    },
    {
        question: 'The Last Samurai',
        audio: {
            url: 'assets/audio/lastSamurai.mp3'
        },
        choices: {
            a: 'choice-one',
            b: 'choice-two',
            c: 'choice-three',
        },
        correctAnswer: 'b'
    },
    {
        question: 'Sherlock',
        audio: {
            url: 'assets/audio/sherlock.mp3'
        },
        choices: {
            a: 'choice-one',
            b: 'choice-two',
            c: 'choice-three',
        },
        correctAnswer: 'b'
    },
    {
        question: 'Man of Steel',
        audio: {
            url: 'assets/audio/manOfSteel.mp3'
        },
        choices: {
            a: 'choice-one',
            b: 'choice-two',
            c: 'choice-three',
        },
        correctAnswer: 'b'
    },
    {
        question: 'Inception',
        audio: {
            url: 'assets/audio/inception.mp3'
        },
        choices: {
            a: 'choice-one',
            b: 'choice-two',
            c: 'choice-three',
        },
        correctAnswer: 'b'
    },
    {
        question: 'Pirates',
        audio: {
            url: 'assets/audio/pirates.mp3'
        },
        choices: {
            a: 'choice-one',
            b: 'choice-two',
            c: 'choice-three',
        },
        correctAnswer: 'b'
    },
    {
        question: 'Rush',
        audio: {
            url: 'assets/audio/rush.mp3'
        },
        choices: {
            a: 'choice-one',
            b: 'choice-two',
            c: 'choice-three',
        },
        correctAnswer: 'b'
    },
    {
        question: 'Lion King',
        audio: {
            url: 'assets/audio/lionKing.mp3'
        },
        choices: {
            a: 'choice-one',
            b: 'choice-two',
            c: 'choice-three',
        },
        correctAnswer: 'b'
    },
    {
        question: 'Gladiator',
        audio: {
            url: 'assets/audio/gladiator.mp3'
        },
        choices: {
            a: 'choice-one',
            b: 'choice-two',
            c: 'choice-three',
        },
        correctAnswer: 'b'
    },
]

const quizStructureCopy = [...quizStructure];

function createQuestion() {
    const randomIndex = Math.floor(Math.random(quizStructure) * quizStructure.length);
    const randomQuestion = quizStructureCopy[randomIndex];
    document.getElementById('listen-button').innerHTML = randomQuestion.question;

    let listenButton = document.getElementById('listen-button');
    const audioPlayer = document.getElementById('audio-player');
    audioPlayer.src = randomQuestion.audio.url;
}

createQuestion();

function audioPlay() {
    const listenButton = document.getElementById('listen-button');
    const audioPlayer = document.getElementById('audio-player');
    audioPlayer.play();
}

document.getElementById('listen-button').addEventListener('click', audioPlay);


