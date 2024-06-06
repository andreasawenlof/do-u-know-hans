/**
 * This array has all possible question that are used in the quiz. 
 * The choices object can extend to more options than three.
 * 
 */

const quizStructure = [
    {
        question: 'Interstellar',
        audio: {
            url: 'assets/audio/interstellar.mp3'
        },
        choices: {
            a: 'Inception',
            b: 'Interstellar',
            c: 'Dune',
        },
        correctAnswer: 'b'
    },
    {
        question: 'Batman',
        audio: {
            url: 'assets/audio/darkKnight.mp3'
        },
        choices: {
            a: 'Rush',
            b: 'Dunkirk',
            c: 'Batman',
        },
        correctAnswer: 'c'
    },
    {
        question: 'Dune',
        audio: {
            url: 'assets/audio/dune.mp3'
        },
        choices: {
            a: 'Dune',
            b: 'Interstellar',
            c: 'Inception',
        },
        correctAnswer: 'a'
    },
    {
        question: 'The Last Samurai',
        audio: {
            url: 'assets/audio/lastSamurai.mp3'
        },
        choices: {
            a: 'Pirates',
            b: 'Gladiator',
            c: 'Last Samurai',
        },
        correctAnswer: 'c'
    },
    {
        question: 'Sherlock',
        audio: {
            url: 'assets/audio/sherlock.mp3'
        },
        choices: {
            a: 'Man of Steel',
            b: 'Sherlock',
            c: 'Inception',
        },
        correctAnswer: 'b'
    },
    {
        question: 'Man of Steel',
        audio: {
            url: 'assets/audio/manOfSteel.mp3'
        },
        choices: {
            a: 'Man of Steel',
            b: 'Gladiator',
            c: 'Rush',
        },
        correctAnswer: 'a'
    },
    {
        question: 'Inception',
        audio: {
            url: 'assets/audio/inception.mp3'
        },
        choices: {
            a: 'Dunkirk',
            b: 'Inception',
            c: 'Dune',
        },
        correctAnswer: 'b'
    },
    {
        question: 'Pirates',
        audio: {
            url: 'assets/audio/pirates.mp3'
        },
        choices: {
            a: 'Last Samurai',
            b: 'Lion King',
            c: 'Pirates',
        },
        correctAnswer: 'c'
    },
    {
        question: 'Rush',
        audio: {
            url: 'assets/audio/rush.mp3'
        },
        choices: {
            a: 'Rush',
            b: 'Dunkirk',
            c: 'Inception',
        },
        correctAnswer: 'a'
    },
    {
        question: 'Lion King',
        audio: {
            url: 'assets/audio/lionKing.mp3'
        },
        choices: {
            a: 'Sherlock',
            b: 'Lion King',
            c: 'Interstellar',
        },
        correctAnswer: 'b'
    },
    {
        question: 'Gladiator',
        audio: {
            url: 'assets/audio/gladiator.mp3'
        },
        choices: {
            a: 'Rush',
            b: 'Man of Steel',
            c: 'Gladiator',
        },
        correctAnswer: 'c'
    },
    {
        question: 'Dunkirk',
        audio: {
            url: 'assets/audio/dunkirk.mp3'
        },
        choices: {
            a: 'Dunkirk',
            b: 'Inception',
            c: 'Dune',
        },
        correctAnswer: 'a'
    },
]


// Copy of the array so that the original array does not get altered.
let quizStructureCopy = [...quizStructure];


/**
 * Resets the quiz
 * Initializes new questions.
 * Reset the score and hides the score.
 */
function quizInit() {
    quizStructureCopy = [...quizStructure];
    createQuestion();
    document.getElementById('play-again').style.display = 'none';
    document.getElementById('listen-button').style.display = 'block';
    document.getElementById('choices').style.display = 'flex';
    document.getElementById('correct-score').innerHTML = 0;
    document.getElementById('correct-score').style.display = 'none';
    document.getElementById('incorrect-score').innerHTML = 0;
    document.getElementById('incorrect-score').style.display = 'none';
}


/**
 * 
 * @param {number} startNumber 
 * @param {number} endNumber 
 * @returns A random number between the rang of startNumber and endNumber
 */

function createRandomNumberRange(startNumber, endNumber) {
    return Math.floor(Math.random() * (endNumber - startNumber + 1) + startNumber);
}

/**
 * Picks a question from the copied array through an random index.
 * Makes sure that the a question never occurs more than once by removing the question from the list of questions.
 */
function createQuestion() {
    const randomIndex = createRandomNumberRange(0, quizStructureCopy.length - 1);
    //const randomIndex = Math.floor(Math.random(quizStructure) * quizStructure.length);
    const randomQuestion = quizStructureCopy[randomIndex];
    const newArrayWithoutIndex = removeIndexFromArray(quizStructureCopy, randomIndex);
    quizStructureCopy = newArrayWithoutIndex;
    if (quizStructureCopy > 1) {
        quizStructureCopy;
    }


    /*
     * Adds choice buttons, gives them their unique id and also adds an eventListener on them.
     * Makes sure that the quiz stops trying to pick questions when they question list is empty.
     * When the question gets picked an audio-file connected to it is loaded ready to play.
     */
    //Add Choice Buttons
    const choiceElement = document.getElementById('choices');
    let choiceButtons = '';
    for (const [choice, answer] of Object.entries(randomQuestion.choices)) {
        choiceButtons += `<button id='${choice}' class="type-one-button">${answer}</button>`;
    }

    choiceElement.innerHTML = choiceButtons;

    for (const [choice, answer] of Object.entries(randomQuestion.choices)) {
        console.log(`Key: ${choice}, Value: ${answer}`);
        const choiceButtonElement = document.getElementById(choice);
        choiceButtonElement.addEventListener('click', createAnswerEventListener(randomQuestion.correctAnswer, choice));
    }


    const audioPlayer = document.getElementById('audio-player'); // Pause the audio player before loading the next question
    audioPlayer.src = randomQuestion.audio.url;
}

/**
 * Redirects to the score page.
 */
function goToScorePage() {
    window.location.href = 'score.html';
}

/**
 * 
 * @param {array} arr 
 * @param {number} index 
 * @returns An new array without the index
 */
function removeIndexFromArray(arr, index) {
    const firstHalf = arr.slice(0, index);
    const secondHalf = arr.slice(index + 1);
    const newArrayWithoutIndex = firstHalf.concat(secondHalf);
    return newArrayWithoutIndex;
}

/**
 * By comparing the choice to the correct answer it determines if the answer is correct or incorrect
 * @param {string} correctAnswer 
 * @param {string} pickedAnswer 
 * @returns an eventHandler to be triggered by an eventListener
 * Pausing the audio player when choice button triggers
 * 
 */
function createAnswerEventListener(correctAnswer, pickedAnswer) {
    const answerEventListener = (event) => {

        const buttons = document.getElementById('choices').children;

        event.target.disabled = true;

        const isCorrect = correctAnswer === pickedAnswer;

        if (isCorrect) {
            scoreCounter(1, 0);

        } else {
            scoreCounter(0, 1);
        }
        recolorButtonsAccordingToCorrectAnswer(pickedAnswer, correctAnswer);
        const player = document.getElementById('audio-player');
        player.pause();

        for (let button of buttons) {
            button.disabled = true;
        }

        if (quizStructureCopy.length === 0) {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(goToScorePage());
                }, 1000);
            });
        } else {
            setTimeout(createQuestion, 1000);
        }
    }
    return answerEventListener;
}

/**
 * Colors the choice button in respective colors depending of an answer is correct or incorrect.
 * @param {string} correctAnswer 
 */
function recolorButtonsAccordingToCorrectAnswer(choice, correctAnswer) {
    const buttons = document.getElementById('choices').children;
    for (let button of buttons) {
        if ((choice === button.id) && (correctAnswer === button.id)) {
            button.classList.add("correct-button");
        } else if ((choice === button.id) && (correctAnswer !== button.id)) {
            button.classList.add("incorrect-choice");

        }
    }
}


/**
 * Take an input of score and changes the html-element to the current score and stores it in local storage
 * @param {number} correctPoints 
 * @param {number} incorrectPoints 
 */
function scoreCounter(correctPoints, incorrectPoints) {
    const correctCounterElement = document.getElementById('correct-score');
    const correctCounter = Number(correctCounterElement.innerHTML) + correctPoints;
    correctCounterElement.innerHTML = correctCounter;
    localStorage.setItem('correctScore', correctCounter);

    const incorrectCounterElement = document.getElementById('incorrect-score');
    const incorrectCounter = Number(incorrectCounterElement.innerHTML) + incorrectPoints;
    incorrectCounterElement.innerHTML = incorrectCounter;
    localStorage.setItem('incorrectScore', incorrectCounter);
}

// Add a variable to track the audio state
let audioMuted = false;


/**
 * Triggers to play audio
 */
function audioPlay() {
    const audioPlayer = document.getElementById('audio-player');

    if (audioPlayer.paused) {
        audioPlayer.play();
        audioMuted = false;
    } else {
        audioPlayer.pause();
        audioMuted = true;
    }
}

/**
 * Eventhandler including Initialization and triggering audio play
 */
function setupEventListener() {
    document.getElementById('listen-button').addEventListener('click', audioPlay);
    document.getElementById('play-again').addEventListener('click', quizInit);
}


setupEventListener();
quizInit();




