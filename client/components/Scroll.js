import React from 'react'
import { Route } from 'react-router-dom'
import Map from './Map'
import Train from './Train'
import Fight from './Fight'
import axios from 'axios'

class Scroll extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      levels: [],
      profile: null,
      loading: true
    };

    this.beltPromotion = this.beltPromotion.bind(this);
  }
  
  beltPromotion(levelId) {
    let belt = this.state.levels.find((level)=> level.id === levelId).belt;
    if (this.state.profile.belts.indexOf(belt) === -1) {
      let profile = this.state.profile;
      profile.belts = profile.belts.concat(belt);
      this.setState({profile});
      return belt;
    }

    return false;
  }

  componentWillMount() {    
    let user = axios.get("http://localhost:3001/users/1")
      .then((res) => res.data);
    let levels = axios.get("http://localhost:3001/levels")
      .then((res) => res.data);

    Promise.all([user, levels]).then(([user, levels]) => {
        this.setState({
          levels: levels,
          profile: user,
          loading: false
        });
    });
  }

  render() {
    if (!this.state.loading) document.querySelectorAll(".scroll-body")[0].classList.remove("scroll-folded");
    return <div>
        <div className="scroll"></div>
            <div className="scroll-body scroll-folded">        
              <Route exact path={`${this.props.match.url}`} render={()=>                
                <Map levels={this.state.levels} user={this.state.profile} />
              }/>
              <Route exact path={`${this.props.match.url}/level/:level/train`} render={(props)=>
                <Train gameMode={props.match.path.split('/').pop()} level={props.match.params.level} levelId={props.location.state.levelId} levels={this.state.levels} user={this.state.profile} />
              }/>
              <Route exact path={`${this.props.match.url}/level/:level/spar`} render={(props)=>
                <Fight gameMode={props.match.path.split('/').pop()} level={props.match.params.level} levelId={props.location.state.levelId} levels={this.state.levels} user={this.state.profile} />
              }/>
              <Route exact path={`${this.props.match.url}/level/:level/fight`} render={(props)=>
                <Fight gameMode={props.match.path.split('/').pop()} level={props.match.params.level} levelId={props.location.state.levelId} levels={this.state.levels} user={this.state.profile} beltPromotion={this.beltPromotion} />
              }/>
            </div>  
        <div className="scroll"></div>        
    </div>
  }
}

export default Scroll;