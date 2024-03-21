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

function quizInit() {
    quizStructureCopy = [...quizStructure];
    document.getElementById('play-again').style.display = 'none';
    createQuestion();
    document.getElementById('listen-button').style.display = 'block';
    document.getElementById('choices').style.display = 'block';
    document.getElementById('correct-score').innerHTML = 0;
    document.getElementById('correct-score').style.display = 'none';
    document.getElementById('incorrect-score').innerHTML = 0;
    document.getElementById('incorrect-score').style.display = 'none';
}

function createRandomNumberRange(startNumber, endNumber) {
    return Math.floor(Math.random() * (endNumber - startNumber + 1) + startNumber);
}

function createQuestion() {
    const randomIndex = createRandomNumberRange(0, quizStructureCopy.length - 1);
    //const randomIndex = Math.floor(Math.random(quizStructure) * quizStructure.length);
    const randomQuestion = quizStructureCopy[randomIndex];
    const newArrayWithoutIndex = removeIndexFromArray(quizStructureCopy, randomIndex);
    quizStructureCopy = newArrayWithoutIndex;
    document.getElementById('listen-button').innerHTML = randomQuestion.question;
    if(quizStructureCopy > 0) {
        quizStructureCopy;
    }
    
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
            localStorage.setItem('correctScore', correctCounter);
        } else {
            const incorrectCounterElement = document.getElementById('incorrect-score');
            const incorrectCounter = Number(incorrectCounterElement.innerHTML) + 1;
            incorrectCounterElement.innerHTML = incorrectCounter;
            localStorage.setItem('incorrectScore', incorrectCounter);
        }
        createQuestion();
        const player = document.getElementById('audio-player');
        player.pause();
    }
    return answerEventListener;
}

function audioPlay() {
    const audioPlayer = document.getElementById('audio-player');

    audioPlayer.play();
}

function setupEventListener() {
    document.getElementById('listen-button').addEventListener('click', audioPlay);
    document.getElementById('play-again').addEventListener('click', quizInit);
}


setupEventListener();
quizInit();




