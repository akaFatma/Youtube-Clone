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
const SideBar = ({sidebar,category,setCategory}) => {
  return (
    <div className={`side-bar ${ sidebar ?"":"small-side-bar"}`}>
      <div className="shortcuts">
        <div className={`links ${category===0? "active":" "}`} onClick={()=>setCategory(0)} >
          <img src={home} alt="" /><p>Home</p>
        </div>
        <div className={`links ${category===20? "active":" "}`} onClick={()=>setCategory(20)} >
          <img src={gameIcon} alt="" /><p>Gaming</p>
        </div>
        <div className={`links ${category===2? "active":" "}`} onClick={()=>setCategory(2)}  >
          <img src={automobiles} alt="" /><p>Automobiles</p>
        </div>
        <div className={`links ${category===17? "active":" "}`}  onClick={()=>setCategory(17)}>
          <img src={sports} alt="" /><p>Sports</p>
        </div>
        <div className={`links ${category===24? "active":" "}`} onClick={()=>setCategory(24)}>
          <img src={entertainement} alt="" /><p>Entertainement</p>
        </div>
        <div className={`links ${category===28? "active":" "}`} onClick={()=>setCategory(28)}>
          <img src={tech} alt="" /><p>Technology</p>
        </div>
        <div className={`links ${category===10? "active":" "}`} onClick={()=>setCategory(10)}>
          <img src={music} alt="" /><p>Music</p>
        </div>
        <div className={`links ${category===22? "active":" "}`} onClick={()=>setCategory(22)}>
          <img src={blogs} alt="" /><p>Blogs</p>
        </div>
        <div className={`links ${category===25? "active":" "}`} onClick={()=>setCategory(25)}>
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