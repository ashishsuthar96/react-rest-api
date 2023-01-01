import React, { useState } from 'react'
import axios from 'axios'
import base_url from '../Api'

const Upload = () => {
    
   const [image,  setImage]= useState()
   const onchange=(e)=>{
            setImage(e.target.files[0])
   }
   const submitHandler= async (event)=>{
    event.preventDefault();
    console.log(image)
    
    let formData= new FormData();
    formData.append('image', image)
    const response= await axios.post(`${base_url}/upload`, formData)
    console.log(response)
   }


  return (
    <div>
        <form onSubmit={submitHandler}>
            <input type="file" name="image" onChange={onchange}/>
            <input type="submit" value="image"/>

        </form>
    </div>
  )
}

export default Upload
