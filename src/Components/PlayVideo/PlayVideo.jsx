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
        <hr />
        <div className="publisher">
            <img src={jack} alt="" />
            <div>
                <p>GreatStack</p>
                <span>1M subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vid-description">
            <p>Channel that makes coding easy</p>
            <p>Subscribe to GreatStack to watch more tutorials on web dev</p>
            <hr />
            <h4>130 comments</h4>
            <div className="comment">
                <img src={user} alt="" />
                <div>
                    <h3>Jack Nicholson <span>1 day ago</span></h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis possimus reici</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>122 likes</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user} alt="" />
                <div>
                    <h3>Jack Nicholson <span>1 day ago</span></h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis possimus reici</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>122 likes</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user} alt="" />
                <div>
                    <h3>Jack Nicholson <span>1 day ago</span></h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis possimus reici</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>122 likes</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user} alt="" />
                <div>
                    <h3>Jack Nicholson <span>1 day ago</span></h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis possimus reici</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>122 likes</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user} alt="" />
                <div>
                    <h3>Jack Nicholson <span>1 day ago</span></h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis possimus reici</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>122 likes</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlayVideo