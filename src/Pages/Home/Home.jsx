import React from 'react'
import './Home.css'
import SideBar from '../../Components/SideBar/SideBar'
import Feed from '../../Components/Feed/Feed'

const Home = ({sidebar}) => {
  return (
    <div>
          <SideBar  sidebar={sidebar}/>
          <div  className={`Container ${sidebar ? "" : "large-container "}`} >
          <Feed/>

          </div>
    </div>
  )
}
import './Home.css'
export default Home