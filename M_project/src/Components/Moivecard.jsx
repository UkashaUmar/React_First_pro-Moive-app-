//import lucide from 'Lucide'

function Moivecard({movie}) {
  function onfrvClick(){
          alert("Clicked")
  }
  
    return (
      <div className="bg-black m-5 p-2 h-163 w-100">
    <div className='' >
      <div className=' h-100 w-90 m-3'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.titles} />    
      <div className="text-white">
        <h3>{movie.title}</h3>
        <p>{movie.release_date .split("-")[0]}</p>
      </div>
      <div className='flex justify-center bg-gray-600 w-2xs text-white  rounded-md p-1 m-1 font-bold'>
            <button  onClick={onfrvClick}> Click </button></div>
      </div>
    </div> 
    </div>
  )
}

export default Moivecard
 