import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

function Ex_19_1() {
    const [data, setData]= useState([])

useEffect(()=>{
const fetchData = async ()=>{
    try{
        const { data} = await axios.get(
// `https://pipedream.com/apps/swapi`
`https://swapi.co/api/films/1/?format=json`
        );
console.log(data);
    }catch(e){
        console.log(e);
    }
}
fetchData()
}, [])

  return (
    <div>Ex_19_1</div>
  )
}

export default Ex_19_1