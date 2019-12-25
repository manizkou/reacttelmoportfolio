import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Background from './img/1.jpg';



class Header extends Component{
	constructor(props){
		super(props);
	}	

	render(){
		const mystyle={
			backgroundImage : `url( ${Background} )`,
			height : '80vh',
			backgroundCover : 'cover'
		}
		return(
			<header style={mystyle}>
			</header>
			);
	}
}

export default Header;