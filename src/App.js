import React, { Component } from 'react';
import './App.css';
import ProfilePic from './ProfilePic';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      userDetails: [
      {
        userName: 'ViSHaL NanD',
        userAccount: 'abavish',
        postDate: 'Sept 13',
      },
      {
        userName: 'Abby NanD',
        userAccount: 'djabhi',
        postDate: 'Sept 18',
      }
      ]
    }
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
