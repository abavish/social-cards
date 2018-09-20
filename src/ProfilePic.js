import React from 'react'
import UserInfo from './UserInfo'


const ProfilePic = (props) => {
	return (
		<div>
			{props.userDetails.map((usr) => (
				<div className="user-card" style={{width: "24rem"}}>
					<hr />
					<UserInfo user={usr}/>
				</div>
			))}
		</div>
			

	)
};

export default ProfilePic;