import axios from 'axios'

const searchImages= async(term)=>{
  const Response=await  axios.get('https://api.unsplash.com/search/photos',{
headers:{
    Authorization:'Client-ID qSaVAqxAHbtFD8Iy6z_BOILdW9A_09kcu-5Jr7ZLEnE'
},
params:{
    query:term,
},
    })
    console.log(Response)
    return Response.data.results;
}
export default searchImages;  