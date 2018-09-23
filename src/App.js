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

    this.handleOnLike = this.handleOnLike.bind(this)
    this.handleOnRetweet = this.handleOnRetweet.bind(this)
  }	
  componentDidMount(){
    console.log("componentDidMount event")
    this.setState({
      userDetails: Seed.usersInfo,
    })
    console.log(Seed.usersInfo)
  }

  handleOnRetweet(userId){
    const nUserDetails = this.state.userDetails.map((user) => {
        if(user.id == userId){
          return Object.assign({}, user, {
            retweetCount: user.retweetCount + 1,
          })
        } else{
          return user
        }
    })

    this.setState({
      userDetails: nUserDetails,
    })
  }

  handleOnLike(userId){
    const newUserDetails = this.state.userDetails.map((user) => {
      
        if(user.id == userId){
          return Object.assign({}, user, {
            likesCount: user.likesCount + 1,
        })
        } else{
            return user
        }
        
    })
    this.setState({
      userDetails: newUserDetails,
    })
  }

	  render() {
      const userDetailComponents = this.state.userDetails.map((userDetail) => (
        <Tweet
          key = {'user - ' + userDetail.id}
          id = {userDetail.id}
          userName = {userDetail.userName}
          profilePicUrl = {userDetail.profilePicUrl}
          userAccount = {userDetail.userAccount}
          postDate = {userDetail.postDate}
          retweetCount = {userDetail.retweetCount}
          likesCount = {userDetail.likesCount}
          commentCount = {userDetail.commentCount}
          description = {userDetail.description}
          onRetweet = {this.handleOnRetweet}
          onLike = {this.handleOnLike}
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
