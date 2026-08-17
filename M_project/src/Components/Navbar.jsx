import React from 'react'
import{Link} from 'react-router-dom'
import Favorite from '../pages/TV_Series';


function Navbar() {
  return (
  <>
    <nav className='bg-zinc-800 p-4 text-rose-500 flex justify-between font-bold'>
      <div className='m-5'>
         <Link to="/">Moive Apps</Link> 
      </div>
      <div className='flex m-5 gap-10'>
       <Link to="/" className=''> Home </Link>
          <Link to="/pgMoives" className=''> Moives </Link>
         <Link to="/tv_series" className=''> TvSeries </Link>
      </div>
    </nav>
    </>
  )
}

export default Navbar;
