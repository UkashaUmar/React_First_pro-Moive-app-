import Top_ratedcard from "../Components/Top_ratedcard"
import Seriescard from "../Components/TV_seriescard"
import {searchTV_Series, getTV_Series,searchTop_rated, getTop_Rated } from "../Services/api"
import { useState,useEffect } from "react"

function TVseries(){
  const [searchQuery, setsearchQuery] = useState("")
   const [Popseries , setPopseries] = useState ([])
   const [error,seterror] = useState (null)
    const [Topseries, setTopseries] = useState([])
const [loading, setloading] = useState(true)
    
    
    useEffect(()=>{
      const loadpopularTVSeries = async() => {
        setloading(true)
        try {
          const popularseries = await getTV_Series();
          setPopseries(popularseries)
        } catch(err){
          console.log(err)
          seterror("failed the moive....")
        }
        finally {
          setloading(false)
        }
      }
       loadpopularTVSeries()
    },[])


     useEffect(()=>{
      const loadTopratedTVSeries = async() => {
        setloading(true)
        try {
          const topratedseries = await getTop_Rated();
          setTopseries(topratedseries)
        } catch(err){
          console.log(err)
          seterror("failed the moive....")
        }
        finally {
          setloading(false)
        }
      }
       loadTopratedTVSeries()
    },[])
     

  const handleserach = async (e)=>{
    e.preventDefault()

      const [Popseries,Topseries] = await Promise.all([ 
         searchTV_Series(searchQuery),
          searchTop_rated(searchQuery)
        ]);
        setPopseries(Popseries)
        setTopseries(Topseries)
    
  };
 const resetSearch = async() =>{
 const topratedseries = await getTop_Rated();
          setTopseries(topratedseries)
const popularseries = await getTV_Series();
          setPopseries(popularseries)

  

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
        <h1 className='text-white font-bold text-5xl mt-8'>Top Rated TVSeries</h1>
        
        </form>

   {loading ? (
          <div>"loading....."</div>
        ):(
      <div className='flex flex-wrap gap-1 p-0 ml-15'>
            
            {Topseries?.map((toprated)=> (
              <Top_ratedcard toprated = {toprated} key={toprated.id}/>
            ))}
      </div>
        )}


         <h1 className='text-white font-bold text-4xl'>Popular TV Series</h1>

          {loading ? (
          <div>"loading....."</div>
        ):(
          <div className='flex flex-wrap gap-1 p-0 ml-15'>
            
           {Popseries?.map((series)=> (
              <Seriescard name = {series.name} first_air_date={series.first_air_date} poster_path={series.poster_path} key={series.id}/>
            ))}
      </div>
        )}

    </div>
 </>
  )
}


export default TVseries
