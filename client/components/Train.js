import React from 'react'

class Train extends React.Component {
  componentWillMount() {
    document.querySelectorAll(".scroll-body")[0].classList.add("scroll-train");      
    this.getNextQuestion();    
  }

  componentWillUnmount() {
      document.querySelectorAll(".scroll-body")[0].classList.remove("scroll-train");      
  }  

  render() {
    return <div>Train</div>
  }
}

export default Train;