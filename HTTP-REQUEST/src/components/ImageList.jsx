import React from 'react'
import ImageShow from './ImageShow'
function ImageList({images}) {

  const renderedImages=images.map((image)=>{
return(
  
<div>
  
<ImageShow  key={image.id}  image={image}/>


</div>
)
  })

  return (
    <div  className='container'>{renderedImages}</div>
  )
}

export default ImageList