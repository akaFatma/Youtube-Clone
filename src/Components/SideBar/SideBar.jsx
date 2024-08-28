import React from 'react'
import './SideBar.css'
import home from '../../assets/home.png'
import gameIcon from '../../assets/game_icon.png'
import sports from '../../assets/sports.png'
import automobiles from '../../assets/automobiles.png'
import entertainement from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'
const SideBar = ({sidebar}) => {
  return (
    <div className={`side-bar ${ sidebar ?"":"small-side-bar"}`}>
      <div className="shortcuts">
        <div className="links">
          <img src={home} alt="" /><p>Home</p>
        </div>
        <div className="links">
          <img src={gameIcon} alt="" /><p>Gaming</p>
        </div>
        <div className="links">
          <img src={automobiles} alt="" /><p>Automobiles</p>
        </div>
        <div className="links">
          <img src={sports} alt="" /><p>Sports</p>
        </div>
        <div className="links">
          <img src={entertainement} alt="" /><p>Entertainement</p>
        </div>
        <div className="links">
          <img src={tech} alt="" /><p>Technology</p>
        </div>
        <div className="links">
          <img src={music} alt="" /><p>Music</p>
        </div>
        <div className="links">
          <img src={blogs} alt="" /><p>Blogs</p>
        </div>
        <div className="links">
          <img src={news} alt="" /><p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
          
          <div><img src={jack} alt="" /><p>PewDiePie</p></div>
          <div><img src={simon} alt="" /><p>MrBeast</p></div> 
          <div><img src={tom} alt="" /><p>TLC</p></div> 
          <div><img src={megan} alt="" /><p> Candice Owens</p></div>
          <div><img src={cameron} alt="" /><p>Brett Cooper</p></div>

        </div>
      </div>

    </div>
  )
}

export default SideBar