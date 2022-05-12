// document.getElementById('shoe-image').src = `./images/Jordan 1.png`

const startButton = document.getElementById('start-btn')

const questionCard = document.getElementById('questions')

const image = document.getElementById('shoe-image')

startButton.addEventListener('click', startGame)

// initialize start button
function startGame () {
    startButton.classList.add('hide');
    questionCard.classList.remove('hide');
    console.log(questionCard)
    // document.getElementById('shoe-image')
    // console.log('started')
}

// make appear questionaire with image 

// log a score

//create an array with questions 