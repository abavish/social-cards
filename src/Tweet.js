import React from 'react'
import dp from './my_pic.jpg'
import UserCard from './UserCard'
import ActionBar from './ActionBar'

class Tweet extends React.Component {
	constructor(props){
		super(props)

		this.handleOnUserLike = this.handleOnUserLike.bind(this)
	}
	handleOnUserLike(userid){
		this.props.onLike(userid)
	}
	render(){
		return (
			<div className="user-card" style={{width: "24rem"}}>
				<hr />
				<div className='user-details'>
					<img className="dp" src={this.props.profilePicUrl} alt="User profile picture" />
					<div className="user-content">
						<span className="acc-name"><strong>{this.props.userName}</strong> </span>
						<span className="username text-muted">@{this.props.userAccount}</span>
						<span className='post-date text-muted'> . {this.props.postDate}</span>
						<p>
							{this.props.description}
						</p>
					</div>
				</div>	
				<UserCard />
				<ActionBar 
					userId={this.props.id}
					onLike={this.handleOnUserLike} 
					onUserRetweet = {() => this.props.onRetweet(this.props.id)}
					retweetCount = {this.props.retweetCount} 
					likesCount = {this.props.likesCount}
					commentCount = {this.props.commentCount}
				/>
			</div>	
		)
	}
	

}

export default Tweet