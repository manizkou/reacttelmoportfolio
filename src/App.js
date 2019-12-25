import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';
import Header from './Header.js';


class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Navigation logoTitle="React Portfolio" />
        <Header />
      </div>
    );
  }
}

export default App;
