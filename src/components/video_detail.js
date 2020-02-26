import React from 'react';

const VideoDetail = ({video}) =>{ 
    //페이지 로드되고 render()하는데 몇초의 시간이 걸려서 그 시간동안 null props가 생기니 그걸 처리해주는것
    if(!video){
        return <div>Loading...</div>
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`; //같은거 https://www.youtube.com/embed/' + videoId;
   
    return (
        <div className="video-detail col-md-8"> 
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}> </iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div> 
            </div>
        </div>
    );
};

export default VideoDetail;