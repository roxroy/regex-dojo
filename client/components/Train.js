import React from 'react'
import { Link } from 'react-router-dom'
import quizzService from '../services/quizzService'

class Train extends React.Component {
  componentWillMount() {
    document.querySelectorAll(".scroll-body")[0].classList.add("scroll-train");
  }

  componentWillUnmount() {
    document.querySelectorAll(".scroll-body")[0].classList.remove("scroll-train");      
  }  

  componentDidMount() {
    $('.carousel').carousel();
  }

  render() {
    return <div className="train">
      <Link to="/app/dojo" className="waves-effect waves-teal btn-flat pink-text text-accent-2 back-btn">
        <i className="material-icons left">arrow_back</i>Back
      </Link>      
      <div className="row center-align train-title">
        <h3 className='pink-text text-accent-2'>train</h3>
        <p className="flow-text text-darken-4">{this.props.level}</p>
      </div>      
      <div className="carousel" height='300px'>      
        {this.props.levels.find((level)=>level.id === this.props.levelId).techniques.map((technique, i, arr) => {
            return <div key={technique.id} className="center-align carousel-item teal lighten-3">                
              <h3 className='pink-text text-accent-2'>{technique.meta}</h3>
              <p className='grey-text text-darken-4'>{technique.description}</p>
              <p className='pink-text text-accent-2 carousel-footer'>{i+1}/{arr.length}</p>
            </div>
        })}      
      </div>
    </div>
  }
}

export default Train;