import React, {useState} from 'react'

function Text(props) {
const [Text,setText]=useState(props.text.slice(0,props.maxNum))
const [showText,setShowText]=useState("show text")
const onClickShow=()=>{
setText(props.text)
}

  return (
      <div>
          <p>{Text}</p>
        <span onClick={onClickShow}>{showText}</span> 
    </div>
  )
}

export default Text