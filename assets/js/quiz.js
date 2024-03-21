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

function createRandomNumberRange(startNumber, endNumber) {
    return Math.floor(Math.random() * (endNumber - startNumber) + startNumber);
}

function createQuestion() {
    const randomIndex = createRandomNumberRange(0, quizStructureCopy.length - 1);
    //const randomIndex = Math.floor(Math.random(quizStructure) * quizStructure.length);
    const randomQuestion = quizStructureCopy[randomIndex];
    const newArrayWithoutIndex = removeIndexFromArray(quizStructureCopy, randomIndex);
    quizStructureCopy = newArrayWithoutIndex;
    const listenButton = document.getElementById('listen-button').innerHTML = randomQuestion.question;
    
    //Add Choice Buttons
    const choiceElement = document.getElementById('choices');
    let choiceButtons = '';
    for (const [choice, answer] of Object.entries(randomQuestion.choices)) {
        choiceButtons += `<button id='${choice}'>${answer}</button>`;
    }

    choiceElement.innerHTML = choiceButtons;

    for (const [choice, answer] of Object.entries(randomQuestion.choices)) {
        console.log(`Key: ${choice}, Value: ${answer}`);
        const choiceButtonElement = document.getElementById(choice);
        choiceButtonElement.addEventListener('click', createAnswerEventListener(randomQuestion.correctAnswer, choice));
    }


    if(quizStructureCopy.length === 0) {
        window.location.href = 'score.html';
    }


    const audioPlayer = document.getElementById('audio-player');
    audioPlayer.src = randomQuestion.audio.url;
}

function removeIndexFromArray(arr, index) {
    const firstHalf = arr.slice(0, index);
    const secondHalf = arr.slice(index+1);
    const newArrayWithoutIndex = firstHalf.concat(secondHalf);
    return newArrayWithoutIndex;
}

function createAnswerEventListener(correctAnswer, pickedAnswer) {
    const answerEventListener = () => {
        const isCorrect = correctAnswer === pickedAnswer;
        if(isCorrect) {
            const correctCounterElement = document.getElementById('correct-score');
            const correctCounter = Number(correctCounterElement.innerHTML) + 1; 
            correctCounterElement.innerHTML = correctCounter;   
        } else {
            const incorrectCounterElement = document.getElementById('incorrect-score');
            const incorrectCounter = Number(incorrectCounterElement.innerHTML) + 1;
            incorrectCounterElement.innerHTML = incorrectCounter;

        }
    }
    return answerEventListener;
}

createQuestion();

function audioPlay() {
    const audioPlayer = document.getElementById('audio-player');

    audioPlayer.play();
}

/*
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
*/

function setupEventListener() {
    document.getElementById('listen-button').addEventListener('click', audioPlay);
    document.getElementById('choices').addEventListener('click', createQuestion);
}

setupEventListener();



