import React, { useState , useEffect } from 'react'
import './Recommended.css'
import { API_KEY, valueConverter } from '../../data'

const Recommended = ({categoryId}) => {


    const [apiData,setApidData]=useState([]);


    const fetchData = async()=>{
        const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=40&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`

        await fetch(url)
                   .then(respo=>respo.json())
                   .then(data =>setApidData(data.items));
    }

    useEffect(()=>{
        fetchData();
    },[]);
  return (
    <div className="Recommended">
        {apiData.map((item,index)=>{

            return(
            <div className="side-video-list">
            <img src={item.snippet.thumbnails.default.url} alt="" />
            <div className="vid-info">
                <h4>{item.snippet.title}</h4>
                <p>{item.snippet.channelTitle}</p>
                <p>{valueConverter(item.statistics.viewCount)}</p>
            </div>
        </div>
        )})}
    </div>
  )
}

export default Recommended