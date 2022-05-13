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

//get the question to take a question
function showQuestions(question) {
    questionElement.innerText = question.question
    //create a loop function for answers. ref = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach"
    question.answers.forEach( answer => {
        // create a button for each answer
        let button = document.createElement('button')
        // set inner text equal to answer
        button.innerText = answer.text
        // add button class list
        button.classList.add('btn')
        // check to see if answer is correct
        if (answer.correct) {
            //set data for correct
            button.dataset.correct = answer.correct
        }
        //add event listener for selected answer
        button.addEventListener('click', selectAnswer)
        //add new buttons to answerButton
        answerButton.appendChild(button)
    })
}

// set the question and show it
function setNextQuestion () {
    showQuestions(shuffledQuestions[currentQuestion])
}


function selectAnswer (e) {

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