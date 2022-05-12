// document.getElementById('shoe-image').src = `./images/Jordan 1.png`

const startButton = document.getElementById('start-btn')

const questionCard = document.getElementById('questions')

startButton.addEventListener('click', startGame)

// initialize start button
function startGame () {
    startButton.classList.add('hide');
    questionCard.classList.remove('hide')
    // console.log('started')
}

// make appear questionaire with image 

// log a score

//create an array with questions 