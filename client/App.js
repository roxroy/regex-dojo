import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fetching: true
    };

  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="App">
        Hello From React
      </div>
    );
  }
}

module.exports = App;
