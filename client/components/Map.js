import React from 'react'
import { Link } from 'react-router-dom'
import Level from './Level'
import Profile from './Profile'
import NavLink from './NavLink'

class Map extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      levels: [],
      profile: null,
      loading: true
    };
  }

  componentWillMount() {    
    let user = fetch("http://localhost:3001/users/1")
      .then((res) => res.json());
    
    let levels = fetch("http://localhost:3001/levels")
      .then((res) => res.json());

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
        <div className="row">
          <div className="col offset-l2 s12 l8">
            <Profile profile={this.state.profile} />
          </div>
        </div>                    
          <div className="row">
            {this.state.levels.map((obj, i) => {
              return <div className="col s12 m6" key={i}>
                <Level level={obj.title} levelId={obj.id} description={obj.description} pic={obj.picture} levels={this.state.levels} user={this.state.profile} />
              </div>
            })}
          </div>      
    </div>
  }
}

export default Map;