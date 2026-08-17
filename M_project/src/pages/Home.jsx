import React, { useState ,useEffect } from 'react'
import Moivecard from '../Components/Moivecard'
import Navbar from '../Components/Navbar';
import { searchMoives,searchTV_Series, getmultiSearch,searchMulti, getpopularMoives ,getTV_Series } from '../Services/api';
import { data } from 'react-router-dom';
import TV_Series from './TV_Series';
import Seriescard from '../Components/TV_seriescard';

function Home() {
  const [searchQuery, setsearchQuery] = useState("")
   const [moives , setMoives] = useState ([])
   const [error,seterror] = useState (null)
    const [loading, setloading] = useState(true)
    const [series, setseries] = useState([])
    const [multi, setmulti] = useState([])

    // useEffect(()=>{
    //   const loadsearchMutli = async() => {
    //     setloading(true)
    //     try {
    //       const mutlisear= await getmultiSearch();
    //       setmulti(mutlisear)
    //     } catch(err){
    //       console.log(err)
    //       seterror("failed the moive....")
    //     }
    //     finally {
    //       setloading(false)
    //     }
    //   }
    //    loadsearchMutli()
    // },[])

    
    
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

  useEffect(()=>{
      const loadpopularTV_Series = async() => {
        setloading(true)
        try {
          const popularTV_Series = await getTV_Series();
          setseries(popularTV_Series)
        } catch(err){
          console.log(err)
          seterror("failed the moive....")
        }
        finally {
          setloading(false)
        }
      }
       loadpopularTV_Series()
    },[])


  const handleserach = async (e)=>{
    e.preventDefault()

    const moviess=await searchMulti(searchQuery)
    setMoives(moviess)
    setseries(moviess)
    setsearchQuery("")
        

  };
 const resetSearch = async() =>{
 const popularMoives = await getpopularMoives();
 setMoives(popularMoives);
const popularTV_Series = await getTV_Series();
          setseries(popularTV_Series)
          const mutlisear= await getmultiSearch();
          setmulti(mutlisear)


 }
    return (
<>
      {/* <Navbar/> */}

    <div className='h-100% w-100% bg-gray-600  '>
      
        <form onSubmit={handleserach} className='p-5 '>
          
            <input className='p-1 m-1 rounded-md'
            type="text" 
            placeholder='Search for........'
            value={searchQuery}
            onChange={(e)=>{
           
              setsearchQuery(e.target.value)
           
           }}/>
<button className='bg-black text-white text-sm rounded-md p-2 m-1 ' onClick={()=>{
  resetSearch()
}} type='button'>Reset</button>
            <button className='bg-black text-white text-sm rounded-md p-2 m-1 ' type='submit'>Search</button>
        <h1 className='text-white font-bold text-5xl mt-8'>Popular Moives</h1>
        
        </form>

        {loading ? (
          <div>"loading....."</div>
        ):(
          <div className='flex flex-wrap gap-1 p-0 ml-15'>
            
            {moives?.map((moive)=> (
              <Moivecard movie = {moive} key={moive.id}/>
            ))}
      </div>
        )}
         <h1 className='text-white font-bold text-4xl'>Populer TV Series</h1>
         {loading ? (
          <div>"loading....."</div>
        ):(
          <div className='flex flex-wrap gap-1 p-0 ml-15'>
            
            {series?.map((series)=> (
              <Seriescard series = {series} key={series.id}/>
            ))}
      </div>
        )}
    </div>
 </>
  )
}


export default Home
