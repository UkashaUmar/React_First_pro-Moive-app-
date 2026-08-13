import React from 'react'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
import Favorite from './pages/Favorite'
import Navbar from './Components/Navbar'
// import Moivecard from './Components/Moivecard'
function App(){
  return (
    <div>
      <Navbar/>
{/* <script src='api'></script> */}
      {/* <Moivecard/> */}
    <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorite" element={<Favorite/>}/>
      </Routes>
    </main>
</div> 
)

}


export default App
