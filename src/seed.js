window.Seed = (function () {
	//generates random number no less than 50 and less than 250
	function generateRetweetCount(){
		return Math.floor((Math.random() * 200) + 50)
	}
	function generateLikesCount(){
		return Math.floor((Math.random() * 1000) + 250)
	}
	function generateCommentCount(){
		return Math.floor((Math.random() * 500) + 2)
	}

	const usersInfo = [
	{
		id: 1,
        userName: 'ViSHaL NanD',
        userAccount: 'abavish',
        profilePicUrl: 'dp/my_pic.jpg',
        postDate: 'Sept 13',
        retweetCount: generateRetweetCount(),
        likesCount: generateLikesCount(),
        commentCount: generateCommentCount(),
        description: 'Learning React? Start Small.',
      },
      {
      	id: 2,
        userName: 'Abby NanD',
        profilePicUrl: 'dp/abhi_bhaiyya.JPG',
        userAccount: 'djabhi',
        postDate: 'Sept 18',
        retweetCount: generateRetweetCount(),
        likesCount: generateLikesCount(),
        commentCount: generateCommentCount(),
        description: 'Keep building on what you already learned. Single block at a time.',
      }
	]
	return {usersInfo}
})()

export default window.Seed