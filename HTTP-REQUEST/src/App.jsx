import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import searchImages from './components/api'
import ImageList from './components/ImageList'

function App() {
  const [images, setImages] = useState([])

const handleSubmit=async(term)=>{
  // console.log("do a search",term)  
  const result=await searchImages(term)
  setImages(result)
}

  return (
    <>
<SearchBar onSubmit={handleSubmit}/>
    <ImageList images={images}/>
    </>
  )
}

export default App

