import React from 'react'
import { Route } from 'react-router-dom'
import Map from './Map'
import Train from './Train'
import Spar from './Spar'
import Fight from './Fight'

class Scroll extends React.Component {  
  render() {
    return <div>
        <div className="scroll"></div>
            <div className="scroll-body scroll-folded">        
              <Route exact path={`${this.props.match.url}`} component={Map}/>
              <Route exact path={`${this.props.match.url}/level/:level/train`} component={Train}/>
              <Route exact path={`${this.props.match.url}/level/:level/spar`} component={Spar}/>
              <Route exact path={`${this.props.match.url}/level/:level/fight`} component={Fight}/>
            </div>  
        <div className="scroll"></div>        
    </div>
  }
}

export default Scroll;