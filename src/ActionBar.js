import React from 'react'

 class ActionBar extends React.Component {
 	constructor(props){
 		super(props)

 		this.handleOnLike = this.handleOnLike.bind(this)
 	}

 	handleOnLike(){
 		this.props.onLike(this.props.userId)
 	}

 	

 	render(){
 		return(
			<div className="action-bar">
				<div className="comment">
					<a>
						<i className="fa fa-comment"></i>
					</a>
					<span className="comment-count"> {this.props.commentCount}</span>
				</div>
				<div className="retweet">
					<a onClick={() => this.props.onUserRetweet(this.props.userId)}>
						<i className="fa fa-retweet"></i>
					</a>
					<span className="retweet-count"> {this.props.retweetCount}</span>
				</div>
				<div className="heart">
					<a onClick={this.handleOnLike}>
						<i className="fa fa-heart"></i>
					</a>
					<span className="heart-count"> {this.props.likesCount}</span>
				</div>
				<div className="mail">
					<i className="material-icons">mail_outline</i>
				</div>
			</div>
		)
 	}
	
}

export default ActionBar