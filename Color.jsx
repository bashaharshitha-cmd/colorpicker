import React,{useState} from 'react'
import './Color.css'


const Color = () => {
  const[color,setColor]=useState("#FFFFFF");

  function handleColorchange(event){
    setColor(event.target.value)
  }
  return (
    <div className="color-picker-container">
      <h1>colorpicker</h1>
      <div className="color-display"
      style={{backgroundColor:color}}
      >
    

      </div>
      <p>selcted color:</p>
      <label>select a color</label>
      <input type="color" value={color} onChange={handleColorchange}/>
    </div>
  );
};

export default Color;