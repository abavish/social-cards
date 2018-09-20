import React from 'react'
import dp from './my_pic.jpg'
import UserCard from './UserCard'
import ActionBar from './ActionBar'

const UserInfo = (props) => {
	return (
		<div>
			<div className='user-details'>
				<img className="dp" src={dp} alt="User profile picture" />
				<div className="user-content">
					<span className="acc-name"><strong>{props.user.userName}</strong> </span>
					<span className="username text-muted">@{props.user.userAccount}</span>
					<span className='post-date text-muted'> . {props.user.postDate}</span>
					<p>
						Learning React? Start Small.
					</p>
				</div>
			</div>		
			<UserCard />
			<ActionBar />
		</div>	
	)
}

export default UserInfo