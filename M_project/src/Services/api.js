const API_KEY = "29c903a6f9eb2f274b0c6017a06ae9e8"
const BASE_URL='https://api.themoviedb.org/3';


export const getpopularMoives = async ()=> {
    const respone = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data= await respone.json()
    console.log(data.results)
return  data.results
}   
 
export const searchMoives = async (query)=> {
try {
     const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
const data = await response.json()
console.log("search", data.results)
return data.results
} catch (error) {

    console.log(error)
      
}
    


} 