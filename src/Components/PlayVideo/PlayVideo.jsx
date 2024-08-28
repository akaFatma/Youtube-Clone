import React from 'react'
import './PlayVideo.css'
import video from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import jack from '../../assets/jack.png'
import save from '../../assets/save.png'
import user from '../../assets/user_profile.jpg'

const PlayVideo = () => {
  return (
    <div className="play-video">
        <video src={video} controls autoPlay muted></video>
        <h3>Best youtube channel to learn web dev</h3>
        <div className="play-video-info">
            <p>100k &bull; 2 days ago</p>
            <div className="stats">
                <span><img src={like} alt="" />10k likes</span>
                <span><img src={dislike} alt="" />1k dislikes</span>
                <span><img src={share} alt="" />Share</span>
                <span><img src={save} alt="" />Save</span>
                
            </div>
        </div>
        <div className="publisher">
            <img src={jack} alt="" />
            <div>
                <p>GreatStack</p>
                <span>1M subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default PlayVideo