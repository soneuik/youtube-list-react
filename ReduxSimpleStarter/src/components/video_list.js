import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) =>{ 
    const videoItems = props.videos.map((video)=> {
        //component안에 유니크한 key값을 설정해줘야한다.
        return (
            <VideoListItem
            onVideoSelect={props.onVideoSelect}
            key={video.etag}
            video={video} 
            /> 
        );
        
    });
 
    return(
        <ul className="col-md-4 list-group">
            {/* //for loop는 되도록 쓰지말고, Map을 쓰기.
                var array = [1,2,3];
                array.map(function(number){
                    return number*2
                });
            */}
            {videoItems}
        </ul>
    );
};

export default VideoList 