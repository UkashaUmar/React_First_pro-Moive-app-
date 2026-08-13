import React from 'react'
import{Link} from 'react-router-dom'
import Favorite from '../pages/Favorite';


function Navbar() {
  return (
  <>
    <nav className='bg-black p-4 text-purple-500 flex justify-between font-bold'>
      <div className='m-5'>
         <Link to="/">Moive Apps</Link> 
      </div>
      <div className='flex m-5 gap-10'>
       <Link to="/" className=''> Home </Link>
         <Link to="/favorite" className=''> Favorite </Link>
      </div>
    </nav>
    </>
  )
}

export default Navbar;
