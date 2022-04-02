import axios from 'axios'
import React, { useState } from 'react'

export const UploadingFile = () => {


    const [selectedField , setSelectedField] = useState("")

   const myHandler = (e) => {
        setSelectedField(e.target.files[0])
    }

  const submitHandler= (e)=>{
        e.preventDefault()
        // var url = "/auth/registration";
        // const formdata = new FormData();
        // formdata.append('myFile', selectedField, setSelectedField.name);
        // formdata.append('name', 'image')
        // let response = axios.post(url, formdata)
        // console.log(response)
        console.log(selectedField)
    }
  return (
    <div>
        <form onSubmit={submitHandler} >
        <input type= "file" name='myFile' onChange={myHandler} />   
        <input type= "submit" value= "Upload" />
        </form>
    </div>
  )
}
