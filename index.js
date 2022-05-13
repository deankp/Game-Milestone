// document.getElementById('shoe-image').src = `./images/Jordan 1.png`
// set elements
const startButton = document.getElementById('start-btn')

const questionCard = document.getElementById('preguntas')

const questionElement = document.getElementById('question')

const answerButton = document.getElementById('answer-buttons')

startButton.addEventListener('click', startGame)

// initialize start button
function startGame () {
    startButton.classList.add('hide');
    // set shuffled questions in a function to random
    shuffledQuestions = questions.sort(() => Math.random())
    currentQuestion = 0
    questionCard.classList.remove('hide');
    setNextQuestion();
    
    // console.log('started')
}

function showQuestions(question) {
    questionElement.innerText = question.question
}

function setNextQuestion () {
    showQuestions(shuffledQuestions[currentQuestion])
}


function selectAnswer () {

}

// make appear questionaire with image 

// log a score

//create an array with questions and image 

const questions = [
    {
        image: document.getElementById('shoe-image').src = `./images/Jordan 1.png`,
        question: 'Name This Iconic Shoe:',
        answers: [
            { text: 'Nike Air Max 1', correct: false },
            { text: 'Air Jordan 1', correct: true },
            { text: 'Nike Dunk', correct: false },
            { text: 'Air Jordan 11', correct: false}
        ]
    }
]