import React from 'react'
import dp from './my_pic.jpg'

const Tweet = (props) => {
	
	return (
		<div>
			<div className='user-details'>
				<img className="dp" src={props.profilePicUrl} alt="User profile picture" />
				<div className="user-content">
					<span className="acc-name"><strong>{props.userName}</strong> </span>
					<span className="username text-muted">@{props.userAccount}</span>
					<span className='post-date text-muted'> . {props.postDate}</span>
					<p>
						Learning React? Start Small.
					</p>
				</div>
			</div>		
			
		</div>	
	)

}

export default Tweet