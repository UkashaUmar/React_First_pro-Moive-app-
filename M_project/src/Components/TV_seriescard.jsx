function Seriescard({name,poster_path,title,first_air_date}) {
  function onfrvClick(){
          alert("Clicked")
  }
  
    return (
      <div className="bg-zinc-900 max-w-96 rounded-2xl m-5 h-159">
   
      <div className=' h-100 w-full rounded-2xl'>
        <img className="w-full" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={name} />    
      <div className="text-white">
        <h3>{name}</h3>
        <p>{first_air_date}</p>
      </div>
    
      </div>
    
    </div>
  )
}

export default Seriescard