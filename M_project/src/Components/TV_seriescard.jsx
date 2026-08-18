function Seriescard({name,poster_path,title,relase_date,first_air_date}) {
  function onfrvClick(){
          alert("Clicked")
  }
  
    return (
      <div className="bg-zinc-900 max-w-96 rounded-2xl m-5 h-163">
   
      <div className=' h-100 w-full mt-2'>
        <img className="w-full" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={name} />    
      <div className="text-white">
        <h3>{name}</h3>
        <p>{relase_date}</p>
      </div>
      <div className='flex justify-center bg-gray-600 w-2s text-white  rounded-md p-1 m-1 font-bold'>
            <button  onClick={onfrvClick}> Click </button></div>
      </div>
    
    </div>
  )
}

export default Seriescard