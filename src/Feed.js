import React from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
function Feed() {
    return (
        <div className="feed">
        {/* <div className="feed__header">
           <h2>Home</h2> 
        </div> */}
<TweetBox />
<Post 
displayName="Clement Appoles"
username="clivezito"
verified={true}
text="demo app for practise"
avatar="https://scontent.fjnb3-1.fna.fbcdn.net/v/t1.6435-1/cp0/c7.0.40.40a/p40x40/51199729_1951723274896833_3233725424559194112_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=dbb9e7&_nc_eui2=AeHz4tTcqcMJYXuC5rnZN00DmqtBtwxLBcGaq0G3DEsFwayBkPpG2GL7DTXLSk78fWwMbWlJPzb-F7s64e4swDPl&_nc_ohc=ApspW0aMvw0AX8wpQmx&_nc_ht=scontent.fjnb3-1.fna&tp=27&oh=17d41e2cecf4266d396912c4588deb28&oe=60A68931"
image="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif"/>
        </div>
    )
}

export default Feed
