import React, { Component } from 'react'
import './App.css'
import ProfilePic from './ProfilePic'
import Tweet from './Tweet'
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
      const userDetailComponents = this.state.userDetails.map((userDetail) => (
        <Tweet
          key = {'user - ' + userDetail.id}
          userName = {userDetail.userName}
          profilePicUrl = {userDetail.profilePicUrl}
          userAccount = {userDetail.userAccount}
          postDate = {userDetail.postDate}
        />
      ))
      
	    return (
	      <div>
	        <h1>Social Card Demo</h1>
	        <div className="socialCard">
	          {userDetailComponents}
	        </div>
	      </div>
	    );
	  }
}

export default App;
