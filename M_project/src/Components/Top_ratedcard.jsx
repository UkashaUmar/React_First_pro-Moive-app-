function Top_ratedcard(toprated){

 function onfrvClick(){
    alert("Clicked")
  }

  
    return (
      <div className="bg-zinc-900 max-w-96 rounded-2xl m-5 p-2 pt-0 py-0 h-163 w-100">
   
      <div className=' h-100 w-full mt-2'>
       <img className="w-full" src={`https://image.tmdb.org/t/p/w500${toprated.toprated.poster_path}`} alt={toprated.name} />    
      <div className="text-white">
        <h3>{toprated.toprated.name}</h3>
        <p>{toprated.toprated.first_air_date.split("_")[0]}</p>
      </div>
      <div className='flex justify-center bg-gray-600 w-2s text-white  rounded-md p-1 m-1 font-bold'>
            <button  onClick={onfrvClick}> Click </button></div>
      </div>
    
    </div>
  )
}
export default Top_ratedcard