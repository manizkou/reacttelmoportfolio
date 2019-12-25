import React, { Component } from 'react';
import './Navigation.css';
import ReactDOM from 'react-dom';


class Navigation extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const sections = ['Home','About', 'Services', 'Portfolio', 'Contact'];

// The forEach() method calls a function (a callback function) once for each array element.
// Note that the function takes 3 arguments:
// The item value
// The item index
// The array itself

// Similarly
// Array.map()
// The map() method creates a new array by performing a function on each array element.
// The map() method does not execute the function for array elements without values.
// The map() method does not change the original array.

//Note that the function takes 3 arguments:
// The item value
// The item index
// The array itself
// When a callback function uses only the value parameter, the index and array parameters can be omitted

    const navLinks = sections.map((section)=>{
      return(
        <li><a href={'#'+section}>{section}</a></li>  
      );
    });

    return(
      <nav>
      	<h2 className="logo">{this.props.logoTitle}</h2>
      	<ul>
      		{navLinks}
      	</ul>
      </nav>
    );
  }

}

export default Navigation;
