import React from 'react'
import react_pic from './react.png'

const UserCard = () => {
	return(
		<div className="card user-post" style={{width:"22rem"}}>
			<img className="card-img-top" src={react_pic} alt="Card image cap" />
			<div className="card-body">
			    <h5 className="card-title">Learning React? Start Small.</h5>
			    <p className="card-text">Can't pry yourself away from the tutorials? The cure is to make tiny little experiment apps.</p>	    
	  		</div>
		</div>
	)
}

export default UserCard