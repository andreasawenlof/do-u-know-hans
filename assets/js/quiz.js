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

let quizStructureCopy = [...quizStructure];

function createRandomNumberRange(endNumber) {
    return Math.floor(Math.random() * endNumber - 1);
}

function createQuestion() {
    const randomIndex = createRandomNumberRange(quizStructureCopy.length);
    //const randomIndex = Math.floor(Math.random(quizStructure) * quizStructure.length);
    const randomQuestion = quizStructureCopy[randomIndex];
    const newArrayWithoutIndex = removeIndexFromArray(quizStructureCopy, randomIndex);
    quizStructureCopy = newArrayWithoutIndex;
    const listenButton = document.getElementById('listen-button');
    listenButton.innerHTML = `${randomQuestion.question}`;
    choices(randomQuestion);


    const audioPlayer = document.getElementById('audio-player');
    audioPlayer.src = randomQuestion.audio.url;
}

function removeIndexFromArray(arr, index) {
    const firstHalf = arr.slice(0, index);
    const secondHalf = arr.slice(index+1);
    const newArrayWithoutIndex = firstHalf.concat(secondHalf);
    return newArrayWithoutIndex;
}

createQuestion();

function audioPlay() {
    const audioPlayer = document.getElementById('audio-player');

    audioPlayer.play();
}

function choices(obj) {
    let choiceA = document.getElementById('choice-one-button');
    let choiceB = document.getElementById('choice-two-button');
    let choiceC = document.getElementById('choice-three-button');
    const choiceObjA = obj.choices.a;
    const choiceObjB = obj.choices.b;
    const choiceObjC = obj.choices.c;
    choiceA.innerHTML = choiceObjA;
    choiceB.innerHTML = choiceObjB;
    choiceC.innerHTML = choiceObjC;
}

function setupEventListener() {
    document.getElementById('listen-button').addEventListener('click', audioPlay);
    document.getElementById('choices').addEventListener('click', createQuestion);
}

setupEventListener();



