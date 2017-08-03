import React from 'react'
import { findDOMNode } from 'react-dom'
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
    this.updateUser = this.updateUser.bind(this);
  }
  
  beltPromotion(levelId) {
    let belt = this.state.levels[levelId].belt;
    if (this.state.profile.fightData.belts.indexOf(belt) === -1) {
      return belt;
    }

    return false;
  }

  updateUser(isFight, won, belt) {       
    axios.put("/api/users/1", { isFight, won, belt }).then((res)=>res.data).then((profile)=>this.setState({profile}));        
  }  

  componentWillMount() {    
    let user = axios.get("/api/users/1")
      .then((res) => res.data);
    let levels = axios.get("/api/levels")
      .then((res) => res.data);

    Promise.all([user, levels]).then(([user, levels]) => {
        this.setState({
          levels: levels,
          profile: user,
          loading: false
        });
    });
  }

  componentDidUpdate() {
    findDOMNode(this).scrollIntoView()
  }  

  render() {
    if (!this.state.loading) document.querySelectorAll(".scroll-body")[0].classList.remove("scroll-folded");
    return <div className="scroll">
        <div className="scroll-handle"></div>
            <div className="scroll-body scroll-folded">        {/* level={this.state.levels[props.location.state.levelId]} */}
              <Route exact path={`${this.props.match.url}`} render={()=>                
                <Map levels={this.state.levels} user={this.state.profile} />
              }/>
              <Route exact path={`${this.props.match.url}/level/:level/train`} render={(props)=>
                <Train level={props.match.params.level} levelId={props.location.state.levelId} levels={this.state.levels} />
              }/>
              <Route exact path={`${this.props.match.url}/level/:level/spar`} render={(props)=>
                <Fight gameMode={props.match.path.split('/').pop()} level={props.match.params.level} levelId={props.location.state.levelId} levels={this.state.levels} user={this.state.profile} updateUser={this.updateUser} />
              }/>
              <Route exact path={`${this.props.match.url}/level/:level/fight`} render={(props)=>
                <Fight gameMode={props.match.path.split('/').pop()} level={props.match.params.level} levelId={props.location.state.levelId} levels={this.state.levels} user={this.state.profile} beltPromotion={this.beltPromotion} updateUser={this.updateUser} />
              }/>
            </div>  
        <div className="scroll-handle"></div>        
    </div>
  }
}

export default Scroll;