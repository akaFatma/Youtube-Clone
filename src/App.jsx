import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'


const App = () => {
 
  const [sidebar,setSideBar]=useState(true);

  return (
    <div>
      <Navbar  setSideBar={setSideBar} />
       <Routes>
       <Route path ='/' element={<Home  sidebar={sidebar} />}> </Route> 
       <Route path ='/video/:categoryId/:videoId' element={<Video />}> </Route> 
      </Routes>
    </div>
  )
}

export default App