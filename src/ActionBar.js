import React from 'react'

export default function ActionBar(props) {
	return(
		<div className="action-bar">
			<div className="comment">
				<i class="fa fa-comment-o"></i>
				<span className="comment-count"> 20</span>
			</div>
			<div className="retweet">
				<i class="fa fa-retweet"></i>
				<span className="retweet-count"> 100</span>
			</div>
			<div className="heart">
				<i class="fa fa-heart"></i>
				<span className="heart-count"> 398</span>
			</div>
			<div className="mail">
				<i class="material-icons">mail_outline</i>
			</div>
		</div>
	)
}