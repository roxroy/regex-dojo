const randomRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getQuestion = (levelData, levelId, questionId) => {
	const MAX_ANSWERS = 4;

	// Select a new question not previously selected
	const questionPool = levelData.find((level)=>level.id === levelId).techniques.filter((question)=>question.id !== questionId);
	const quizzQuestion = questionPool[randomRange(0, questionPool.length-1)];

	// generate answer pool without current question and
	let answerPool = levelData.reduce((answers, level)=> {
		if (level.id > levelId) return answers;
		return answers.concat(level.techniques);			
	},[])

	let answers = [];	

	// Find some random answers within current and previous levels
	for (let i = 0; i < MAX_ANSWERS; i++) {
		answers.push(answerPool.splice(randomRange(0, answerPool.length-1),1)[0]);
	}

	// Setup correct answer
	if (!answers.find((answer)=>answer.id === quizzQuestion.id)) 		
		answers[randomRange(0, answers.length-1)] = quizzQuestion;

	return {
      question: quizzQuestion.description,
      answers: answers.map(item => item.meta),
			correctAnswer: quizzQuestion.meta,
			questionId: quizzQuestion.id
    }
}

module.exports = {
	getQuestion,
}
