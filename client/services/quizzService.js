const randomRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getQuestion = (levelData, questionId) => {
  const MAX_ANSWERS = 4;
  var newQuestionIndex;
  let answers = [];

  // Select a new question not previously selected  
  do {
    newQuestionIndex = randomRange(0, levelData.length-1);
  } while (newQuestionIndex == questionId) 

  const answerPool = levelData.filter((answer, i)=> i != newQuestionIndex);

  for (let i = 0; i < MAX_ANSWERS; i++) {
    answers.push(answerPool.splice(randomRange(0, answerPool.length-1),1)[0]);
  }

  answers[randomRange(0, answers.length-1)] = levelData[newQuestionIndex];

  return {
    question: levelData[newQuestionIndex].description,
    answers: answers.map(item => item.meta),
    correctAnswer: levelData[newQuestionIndex].meta,
    questionId: newQuestionIndex
  }
}

module.exports = {
  getQuestion,
  randomRange
}
