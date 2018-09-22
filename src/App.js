import React, { Component } from 'react';
import './App.css';
import ProfilePic from './ProfilePic';
import Seed from './seed.js'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      userDetails: []
    }
  }	
  componentDidMount(){
    console.log("componentDidMount event")
    this.setState({
      userDetails: Seed.usersInfo,
    })
    console.log(Seed.usersInfo)
  }
	  render() {
	    return (
	      <div>
	        <h1>Social Card Demo</h1>
	        <div className="socialCard">
	          <ProfilePic userDetails={this.state.userDetails} />
	        </div>
	      </div>
	    );
	  }
}

export default App;
