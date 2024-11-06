const question =document.querySelector("#question");
const choices =Array.from(document.querySelectorAll(".choice-text"));

let currentQuestion ={}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions =[]

let questions =[
	{
		question: "What are the units for the measurements of radioactive element activity?",
		choice1: 'Angstrom (Å)',
		choice2: 'Becqueral (Bq)',
		choice3: 'Candella (Cd)',
		choice4: 'Density (ρ)',
		answer: Becqueral (Bq),
	},
	{
		question: 'What does ADP stands for?',
		choice1: 'Adenosine Triposphate',
		choice2: 'B. Atomic Tracing Process',
		choice3: 'Adenine Thymine Propagation',
		choice4: 'Adenosine Triglycerides',
		answer: Adenosine Triposphate ,
	},
		{
		question: 'What are the units for the measurements of radioactive element activity?',
		choice1: 'Angstrom (Å)',
		choice2: 'Becqueral (Bq)',
		choice3: 'Candella (Cd)',
		choice4: 'Density (ρ)',
		answer: Becqueral (Bq),
	},
		{
		question: 'What are the units for the measurements of radioactive element activity?',
		choice1: 'Angstrom (Å)',
		choice2: 'Becqueral (Bq)',
		choice3: 'Candella (Cd)',
		choice4: 'Density (ρ)',
		answer: Becqueral (Bq),
	},
		{
		question: 'What are the units for the measurements of radioactive element activity?',
		choice1: 'Angstrom (Å)',
		choice2: 'Becqueral (Bq)',
		choice3: 'Candella (Cd)',
		choice4: 'Density (ρ)',
		answer: Becqueral (Bq),
	},
		{
		question: 'What are the units for the measurements of radioactive element activity?',
		choice1: 'Angstrom (Å)',
		choice2: 'Becqueral (Bq)',
		choice3: 'Candella (Cd)',
		choice4: 'Density (ρ)',
		answer: Becqueral (Bq),
	},
		{
		question: 'What are the units for the measurements of radioactive element activity?',
		choice1: 'Angstrom (Å)',
		choice2: 'Becqueral (Bq)',
		choice3: 'Candella (Cd)',
		choice4: 'Density (ρ)',
		answer: Becqueral (Bq),
	},
		{
		question: 'What are the units for the measurements of radioactive element activity?',
		choice1: 'Angstrom (Å)',
		choice2: 'Becqueral (Bq)',
		choice3: 'Candella (Cd)',
		choice4: 'Density (ρ)',
		answer: Becqueral (Bq),
	},
		{
		question: 'What are the units for the measurements of radioactive element activity?',
		choice1: 'Angstrom (Å)',
		choice2: 'Becqueral (Bq)',
		choice3: 'Candella (Cd)',
		choice4: 'Density (ρ)',
		answer: Becqueral (Bq),
	},
		{
		question: 'What are the units for the measurements of radioactive element activity?',
		choice1: 'Angstrom (Å)',
		choice2: 'Becqueral (Bq)',
		choice3: 'Candella (Cd)',
		choice4: 'Density (ρ)',
		answer: Becqueral (Bq),
	}
]

const Max_Questions = 10

startGame = ()=> {
	questionCounter = 0
	score = 0
	availableQuestions = [...questions]
	getNewQuestion()
}

getNewQuestion =()=> {
	if(availableQuestions).length === 0 || questionCounter> Max_Questions) {
		localStorage.setItem('mostRecentScore', score)
		
		return window.location.assign{'/QuizMaster.html'}
	}
	
	questionCounter++
	progressText.innerText ='Question ${questionsCounter} of ${Max_Questions}'
	progressBarFull.style.width = '${(questionCounter/Max_Questions) * 100}%'

	cont questionIndex = Math.floor{Math.random() * availableQuestions.length}
	currentQuestion = availableQuestions[questionIndex]
	question.innerText = currentQuestion.question
	
	choices.forEach(choice => {
		const number = choice.dataset['number']
		choice.innerText = currentQuestion['choice' + number]
	})
	
	availableQuestions.splice(questionIndex, 1)
	acceptingAnswers = true
}

	choices.forEach(choice => {
		choice.addEventListener('click', e=>{
			if(!acceptingAnswers) return
			
			acceptingAnswers = false
			const selectedChoice = e.target
			const selectedAnswer = selectedChoice.dataset['number']
			
			let classToApply = selectedAnswer == currentQuestion.answer ? 'correct':
			'incorrect'
			
		if(classToApply === 'correct') {
			incrementScore(Score_Points)
		}
		
		selectedChoice.parentElement.classList.add(classToApply)
		setTimeout({} => {
			selectedChoice.parentElement.classList.remove(classToApply)
			getNewQuestion()
		
		}, 1000)
		
	})
})

startGame()