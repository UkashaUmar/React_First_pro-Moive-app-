import React from 'react'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
import Favorite from './pages/TV_Series'
import Navbar from './Components/Navbar'
import PgMoives from './pages/Moives'
import TV_Series from './pages/TV_Series'
// import Moivecard from './Components/Moivecard'
function App(){
  return (
    <div>
      <Navbar/>
     
    <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
         <Route path="/PgMoives" element={<PgMoives/>}/>
        <Route path="/TV_Series" element={<TV_Series/>}/>
      </Routes>
    </main>
</div> 
)

}


export default App
