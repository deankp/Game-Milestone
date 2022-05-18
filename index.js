// document.getElementById('shoe-image').src = `./images/Jordan 1.png`
// define elements
const startButton = document.getElementById('start-btn')

const nextButton = document.getElementById('next-btn')

const questionCard = document.getElementById('preguntas')

const questionElement = document.getElementById('question')

const answerButton = document.getElementById('answer-buttons')


startButton.addEventListener('click', startGame)

//make the next button work for each question
nextButton.addEventListener('click', () => {
    //add to to current question so it can select the next question
    currentQuestion++
    setNextQuestion()
})

// initialize start button
function startGame () {
    startButton.classList.add('hide');
    // set shuffled questions in a function to random
    shuffledQuestions = questions.sort(() => Math.random() - 0.5)
    currentQuestion = 0
    questionCard.classList.remove('hide');
    setNextQuestion();
    // console.log('started')
}
// set the question and show it
function setNextQuestion () {
    nextQuestion ()
    showQuestions(shuffledQuestions[currentQuestion])
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

//resets question default state and hides next button
function nextQuestion() {
    nextButton.classList.add('hide')
    // loop through all children to remove first set of answers 
    while (answerButton.firstChild) {
       answerButton.removeChild(answerButton.firstChild) 
    }
}

// select answer using click ref = 'https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener'
function selectAnswer (e) {
   const selectedButton = e.target //selects whatever you click on 
   const correct = selectedButton.dataset.correct
   setStatus(document.body, correct)
   Array.from(answerButton.children).forEach(button => {
       setStatus(button, button.dataset.correct)
   })
   // check to see if there are more questions
   if (shuffledQuestions.length > currentQuestion + 1) {
   nextButton.classList.remove('hide')
   }
   // add a restart button for user to start over
   else {
       startButton.innerText = 'Start Over'
       startButton.classList.remove('hide')
   } 
}

//set function to see if answer is correct
function setStatus (element, correct) {
    clearStatus(element)
    if (correct) {
        element.classList.add('correct')
    }
    else {
        element.classList.add('wrong')
    }
}

function clearStatus (element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

//create an array with questions and image 

const questions = [
    {
        image: [document.getElementById('shoe-image').src = `./images/Jordan 1.png`],
        question: 'Name This Iconic Shoe:',
        answers: [
            { text: 'Air Jordan 1', correct: true },
            { text: 'Nike Air Max 1', correct: false },
            { text: 'Nike Dunk', correct: false },
            { text: 'Air Jordan 11', correct: false}
        ]
    },
    {
        image: [document.getElementById('shoe-image').src =`./images/Yeezy-350.png`],
        question: 'What is the name of this comfortable shoe?',
        answers: [
            { text: 'Adidas UltraBoost', correct: false },
            { text: 'Nike Air Force 1', correct: false },
            { text: 'Adidas Yeezy 350', correct: true },
            { text: 'New Balance 990', correct: false}
        ]
    },
    {
        image: [document.getElementById('shoe-image').src =`./images/Kobe-Grinch.png`],
        question: 'What is the name of this infamous Christmas Sneaker?',
        answers: [
            { text: 'Nike Foamposite', correct: false },
            { text: 'Nike Air Max 97', correct: false },
            { text: 'Nike Kobe Grinch', correct: true },
            { text: 'Air Jordan 11', correct: false}
        ]
    },
    {
        image: [document.getElementById('shoe-image').src = `./images/Jordan-4.png`],
        question: 'What is the name of this unique shoe?',
        answers: [
            { text: 'Air Jordan 5', correct: false },
            { text: 'Nike Air Force 1', correct: false },
            { text: 'Air Max 95', correct: false },
            { text: 'Air Jordan 4', correct: true}
        ]
    },
    {
        image: [document.getElementById('shoe-image').src =`./images/Jordan-11.png`],
        question: 'Name this sought after shoe:',
        answers: [
            { text: 'Air Jordan 13', correct: false },
            { text: 'Air Jordan 11', correct: true },
            { text: 'Air Jordan 6', correct: false },
            { text: 'Air Jordan 1', correct: false}
        ]
    },
]