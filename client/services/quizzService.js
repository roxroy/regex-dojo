const randomRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getQuestion = (levelData, levelTitle) => {
	const level = levelData.find( item => item.title === levelTitle);

	// Select a technique
	const quizzTechnique = level.techniques[randomRange(0, level.techniques.length-1)];
	let otherTechniques = [],
	    i = 0;

	// Find some random answers
	while ( i < 4) {
	  const randomLevel = levelData[randomRange(0, levelData.length-1)];
		const randomTechnique = randomLevel.techniques[randomRange(0, randomLevel.techniques.length-1)];
		if ( randomTechnique.id != quizzTechnique.id && 
					!otherTechniques.some( item => item.id === quizzTechnique.id ) 	) {
	    otherTechniques.push(randomTechnique);
  		i++;
	  }
	}

  // Setup correct answer
  otherTechniques[randomRange(0, otherTechniques.length-1)] = quizzTechnique;
  let answers = otherTechniques.map(item => item.meta);

	return {
      question: quizzTechnique.description,
      answers,
      correctAnswer: quizzTechnique.meta,
    }
}

module.exports = {
	getQuestion,
}
