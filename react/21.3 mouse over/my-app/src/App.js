import React from 'react';
import { useRef } from 'react';
import './App.css';

function App() {
  const imageRef = useRef(null);


  return (
    <div className="App">
      <h2>hello shaul 05.07.22 11:41</h2>
      <img
        src='images/bear1.jpg'
        height='300'
        alt='bear'
        ref={imageRef}
        onMouseOut={() => {
          imageRef.current.src = 'images/bear2.jpg';
        }}
        onMouseOver={() => {
          imageRef.current.src = 'images/bear1.jpg';
        }}
      />
    </div>
  );
}

export default App;
