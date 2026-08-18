import { data } from "react-router-dom";

const API_KEY = "29c903a6f9eb2f274b0c6017a06ae9e8"
const BASE_URL='https://api.themoviedb.org/3';

///populer Moives API /////


export const getpopularMoives = async (query)=> {
    const respone = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data= await respone.json()
    
return  data.results
}  
export const searchMoives = async (query)=> {
try {
     const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
const data = await response.json()
return data.results
} catch (error) {

    console.log(error)
      
}
}  

///trending moivesw

export const gettrendingMoives = async ()=> {
    const respone = await fetch(`${BASE_URL}/moive/top_rated?api_key=${API_KEY}`);
    const data= await respone.json()
    console.log(data.results)
return  data.results
}  

export const searchtrendingMoives = async (query)=> {
try {
     const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
const data = await response.json()
} catch (error) {

    console.log(error)
      
}
}  





//muliti Search//
export const getmultiSearch = async (query)=> {
    const respone = await fetch(`${BASE_URL}/search/multi?api_key=${API_KEY}&query=${query}&include_adult=false&language=en-US&page=1`);
    const data= await respone.json()
    console.log(data.results)
return  data.results
}  


export const searchMulti = async (query)=> {
try {
     const response = await fetch(`${BASE_URL}/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
const data = await response.json()
return data.results
} catch (error) {
    console.log(error)
      
}
}  



//// TV-series popular////

export const getTV_Series = async ()=> {
    const respone = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}`);
    const data= await respone.json()
return  data.results
}   
export const searchTV_Series = async (query)=> {
try {
     const response = await fetch(`${BASE_URL}/search/tv?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
const data = await response.json()

} catch (error) {

    console.log(error)
      
}
}  


///Top rated series//

export const getTop_Rated = async ()=> {
    const respone = await fetch(`${BASE_URL}/tv/top_rated?api_key=${API_KEY}`);
    const data= await respone.json()

return  data.results
}   
export const searchTop_rated = async (query)=> {
try {
     const response = await fetch(`${BASE_URL}/search/tv?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
const data = await response.json()
return data.results
} catch (error) {

    console.log(error)
      
}
}  
