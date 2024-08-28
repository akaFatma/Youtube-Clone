import React, { useState } from 'react'
import './Home.css'
import SideBar from '../../Components/SideBar/SideBar'
import Feed from '../../Components/Feed/Feed'

const Home = ({sidebar}) => {

  const [category , setCategory]=useState(0);

  return (
    <div>
          <SideBar  sidebar={sidebar} category={category} setCategory={setCategory} />
          <div  className={`Container ${sidebar ? "" : "large-container "}`} >
          <Feed  category={category} setCategory={setCategory} />

          </div>
    </div>
  )
}
import './Home.css'
export default Home