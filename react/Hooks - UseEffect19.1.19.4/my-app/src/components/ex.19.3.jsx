import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'

function Ex_19_3() {
const [data, setData]= useState([])
const [isSpinning, setIsSpinning] =useState(true)


useEffect(()=>{
    const fetchData = async ()=> {
        try{
        const { data } = await axios.get(
            `https://hn.algolia.com/api/v1/search?query={YOUR QUERY}`
        );
        const filterData = data.hits.map((hit)=>hit.title);
        setData(filterData)
        setIsSpinning(false)
        }catch(e){
            console.log(e);
        }
    }
    fetchData()
}, [])

const insertData = ()=> {
    return data.map((str)=> <p key={str} style={{fontSize:'10px', lineHeight:'0.4'}}  > {str} </p> )
}

  return (
    <div> 
        {isSpinning && <h2>our spinner</h2> }
        {insertData()} </div>
  )
}

export default Ex_19_3