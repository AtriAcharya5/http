import React from 'react'

function ImageShow({image}) {
  return (
    <div>
<img className='ImageCon' src={image.urls.small} ></img>

    </div>
  )
}

export default ImageShow