import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import jack from '../../assets/jack.png'
import save from '../../assets/save.png'
import user from '../../assets/user_profile.jpg'
import { API_KEY } from '../../data'
import { json } from 'react-router-dom'
import { valueConverter } from '../../data'
import moment from 'moment'; 


const PlayVideo = ({videoId}) => {


    const [apiData,setApiData]=useState(null);
    const [channelData,setChannelData]=useState(null);
    
    const fetchVideoData = async()=>{
        //fetching videos data
        const videoDetails_url= `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
       
        await fetch(videoDetails_url)
              .then(resp=>resp.json())
              .then(data =>setApiData(data.items[0]));
    }

    useEffect(()=>{
        fetchVideoData();
    },[])

   const fetcOtherData = async()=>{
    const channelDataUrl =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;

    await fetch(channelDataUrl)
          .then(response =>response.json())
          .then(data=>setChannelData(data.items[0]));
   }
   useEffect(()=>{
    fetcOtherData();
},[])


  return (
    <div className="play-video">
     
        <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>
        <h3>{apiData ? apiData.snippet.title : "title here"}</h3>
        <div className="play-video-info">
            <p>{apiData?valueConverter(apiData.statistics.viewCount) : "no views"} &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}</p>
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