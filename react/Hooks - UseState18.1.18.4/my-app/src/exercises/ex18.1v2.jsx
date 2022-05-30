import React ,{useState} from 'react'

function Ex18_1v2({textLength, text}) {

const [isHidden,setIsHidden]=useState(true)

const handleToggle = () => {
    setIsHidden((prev)=>!prev)
}
const insertText = ()=>{
    // console.log(text.length);
    return<p>
        {/* {text}  */}
    {/* {console.log(isHidden)} */}
{isHidden?text.substring(0, textLength) : text}
    <span 
    onClick={handleToggle}
    style={{color:'blue',fontWeight:'bold',cursor:'pointer'}}>T
    {isHidden?'show more':'show less'}
    </span>
     </p>
}
  return (<>
    <div >Ex18.1v2
        {insertText()}
    </div>
    </>)
}

export default Ex18_1v2