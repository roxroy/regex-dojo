import React from 'react'
import Scroll from './Scroll'
import Level from './Level'
import Profile from './Profile'
import NavLink from './NavLink'
import profileData from '../api/profileData'

var levelData = [
  {
    title: 'Basics',
    description: 'In this lesson you will learn about REGEX Basics',
    picture: 'https://cdn.pixabay.com/photo/2017/01/03/22/53/sunrise-1950873_1280.jpg',
  },
  {
    title: 'Character Classes',
    description: 'In this lesson you will learn about REGEX Character Classes',
    picture: 'https://cdn.pixabay.com/photo/2016/03/21/10/44/desert-1270345_1280.jpg',
  },
  {
    title: 'Character Classes II',
    description: 'In this lesson you will learn about REGEX Character Classes II',
    picture: 'https://cdn.pixabay.com/photo/2013/02/03/19/24/sunrise-77677_1280.jpg',
  },
  {
    title: 'Assertions',
    description: 'In this lesson you will learn about REGEX Assertions',
    picture: 'https://cdn.pixabay.com/photo/2016/11/18/16/04/tree-1835529_1280.jpg',
  },
  {
    title: 'Assertions II',
    description: 'In this lesson you will learn about REGEX Assertions II',
    picture: 'https://cdn.pixabay.com/photo/2016/05/02/17/05/nature-1367681_1280.jpg',
  },
  {
    title: 'Quantifiers',
    description: 'In this lesson you will learn about REGEX Quantifiers',
    picture: 'https://cdn.pixabay.com/photo/2016/08/09/21/54/patagonia-1581878_1280.jpg',
  },
  {
    title: 'Special Characters',
    description: 'In this lesson you will learn about REGEX Special Characters',
    picture: 'https://cdn.pixabay.com/photo/2014/11/13/23/33/glacier-530050_1280.jpg',
  },
  {
    title: 'Special Characters II',
    description: 'In this lesson you will learn about REGEX Special Characters II',
    picture: 'https://cdn.pixabay.com/photo/2016/06/17/00/27/seven-sisters-1462388_1280.jpg',
  },
  {
    title: 'Flags',
    description: 'In this lesson you will learn about REGEX Flags',
    picture: 'https://cdn.pixabay.com/photo/2016/03/19/00/59/seven-sisters-1266043_1280.jpg',
  },       
  {
    title: 'Groups',
    description: 'In this lesson you will learn about REGEX Groups',
    picture: 'https://cdn.pixabay.com/photo/2012/01/09/11/22/the-pleiades-star-cluster-11637_1280.jpg',
  }           
];


class App extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      levels: [],
      loading: true
    };
  }

  componentWillMount() {
    setTimeout(() => this.setState({levels: levelData, profile: profileData, loading: false}), 600);    
  }

  render() {
    if (!this.state.loading) document.querySelectorAll(".scroll-body")[0].classList.remove("scroll-folded");
    return <div> 
        <div className="row">
          <div className="col offset-l3 offset s12 l6">
            <Profile profile={this.state.profile} />
          </div>
        </div>
        <div className="card-panel teal lighten-2">
          <h4 className="white-text center-align"><NavLink to="/cheatsheet">Cheatsheet</NavLink>
          </h4>
        </div>
            
        <Scroll>
          <div className="row">
            {this.state.levels.map(function(obj, i){
              return <div className="col s12 m6">
                <Level level={obj.title} description={obj.description} pic={obj.picture}/>
              </div>
            })}
          </div>
        </Scroll>
    </div>
  }
}

export default App;