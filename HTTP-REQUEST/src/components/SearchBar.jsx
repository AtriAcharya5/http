import React from 'react'
import { useState } from 'react'
function SearchBar({onSubmit}) {

const[term,setTerm]=useState('');

   const handleClick=()=>{
onSubmit(term)
 
    }

 
    const handleSubmit=(event)=>{
        event.preventDefault();
        // console.log("form data",term)
    }

    const handleChange=(e)=>{
setTerm(e.target.value);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
                   <input onChange={handleChange}/>
<button value={term} onClick={handleClick}>Click</button>
        </form>
 <p></p>

    </div>

   
  )
}

export default SearchBar