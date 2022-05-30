import React from 'react'
import axios from 'axios'
import { useEffect,useState} from 'react'



function Ex_19_2() {
const [data,setData]= useState([])

useEffect(()=>{
    const fetchData = async ()=> {
        try {
            const data = await axios.get(
                `https://restcountries.com/v3.1/all`
            )
            console.log(data);
        }catch(err){
            console.log(err);
        }
    }
    fetchData()
}, [])

  return (
    <div >Ex_19_2
<input></input>
<input></input>
<button></button>

    </div>

  )
}

export default Ex_19_2