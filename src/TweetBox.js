import { Avatar,Button } from '@material-ui/core';
import React from 'react'
import "./TweetBox.css";

function TweetBox() {
    return (
        <div className="tweetBox">
            <h2>Home</h2> 
           <form>
<div className="tweetBox__input">
    
<Avatar src="https://scontent.fjnb3-1.fna.fbcdn.net/v/t1.6435-1/cp0/c7.0.40.40a/p40x40/51199729_1951723274896833_3233725424559194112_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=dbb9e7&_nc_eui2=AeHz4tTcqcMJYXuC5rnZN00DmqtBtwxLBcGaq0G3DEsFwayBkPpG2GL7DTXLSk78fWwMbWlJPzb-F7s64e4swDPl&_nc_ohc=ApspW0aMvw0AX8wpQmx&_nc_ht=scontent.fjnb3-1.fna&tp=27&oh=17d41e2cecf4266d396912c4588deb28&oe=60A68931" />
<input placeholder="Whats happening?" type="text" />
    </div>
    
               
               <Button className="tweetBox__tweetButton">Tweet</Button>
               </form> 
        </div>
    )
}

export default TweetBox
