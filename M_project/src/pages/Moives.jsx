import React, { useState ,useEffect } from 'react'
import Navbar from '../Components/Navbar';
import { searchMoives, getpopularMoives } from '../Services/api';
import { data } from 'react-router-dom';
import Seriescard from '../Components/TV_seriescard';

function PgMoives() {
  const [searchQuery, setsearchQuery] = useState("")
   const [moives , setMoives] = useState ([])
   const [error,seterror] = useState (null)
    const [loading, setloading] = useState(true)

    
    
    useEffect(()=>{
      const loadpopularMoives = async() => {
        setloading(true)
        try {
          const popularMoives = await getpopularMoives();
          setMoives(popularMoives)
        } catch(err){
          console.log(err)
          seterror("failed the moive....")
        }
        finally {
          setloading(false)
        }
      }
       loadpopularMoives()
    },[])

  const handleserach = async (e)=>{
    e.preventDefault()

    const searchpopmoive=await searchMoives(searchQuery)
    setMoives(searchpopmoive)
    console.log("heloo")
    setsearchQuery("")
  };
 const resetSearch = async() =>{
 const popularMoives = await getpopularMoives();
 setMoives(popularMoives);



 }
    return (
<>
      {/* <Navbar/> */}

    <div className='h-100% w-100% bg-gray-600 '>
      
        <form onSubmit={handleserach} className=''>
            <input className='p-1 m-1 rounded-md'
            type="text" 
            placeholder='Search for moives...'
            value={searchQuery}
            onChange={(e)=>{
           
              setsearchQuery(e.target.value)
           
           }}/>
<button className='bg-black text-white text-sm rounded-md p-2 mt-27 ' onClick={()=>{
  resetSearch()
}} type='button'>Reset</button>
            <button className='bg-black text-white text-sm rounded-md p-2 m-1 ' type='submit'>Search</button>
            
        </form>
<h1 className='font-bold text-white text-5xl mt-3 ml-2'>Movie</h1>
        {loading ? (
          <div>"loading....."</div>
        ):(
          <div className='flex flex-wrap p-5 ml-4 '>
            {moives?.map((series)=> (
              <Seriescard name = {series.title} first_air_date={series.first_air_date} poster_path={series.poster_path} key={series.id}/>
            ))}
      </div>
        )}
    </div>
 </>
  )
}


export default PgMoives