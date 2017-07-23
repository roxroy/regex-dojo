import React from 'react'
import quizzService from '../services/quizzService'

class Train extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      levelId: props.location.state.levelId,
      flashcards: [],
    };
  }

  componentWillMount() {
    document.querySelectorAll(".scroll-body")[0].classList.add("scroll-train");
    const flashcards = quizzService.getFlashCards(levelData, this.state.levelId);
    this.state = {
      flashcards: flashcards,
    };
  }

  componentWillUnmount() {
    document.querySelectorAll(".scroll-body")[0].classList.remove("scroll-train");      
  }  

  render() {
    return <div>Train</div>
  }
}

export default Train;