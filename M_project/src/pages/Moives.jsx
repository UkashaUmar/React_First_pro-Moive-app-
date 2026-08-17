import React, { useState ,useEffect } from 'react'
import Moivecard from '../Components/Moivecard'
import Navbar from '../Components/Navbar';
import { searchMoives, getpopularMoives } from '../Services/api';
import { data } from 'react-router-dom';


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


    const moviess=await searchMoives(searchQuery)
    setMoives(moviess)
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
<button className='bg-black text-white text-sm rounded-md p-2 m-1 ' onClick={()=>{
  resetSearch()
}} type='button'>Reset</button>
            <button className='bg-black text-white text-sm rounded-md p-2 m-1 ' type='submit'>Search</button>
        </form>

        {loading ? (
          <div>"loading....."</div>
        ):(
          <div className='flex flex-wrap p-5 ml-4'>
            {moives?.map((moive)=> (
              <Moivecard movie = {moive} key={moive.id}/>
            ))}
      </div>
        )}
    </div>
 </>
  )
}


export default PgMoives