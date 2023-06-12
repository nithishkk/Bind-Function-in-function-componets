import React from "react";
import "./style.css";

export default function App() {
  const[value,setValue]=React.useState(1)
  const  handleClick=(param)=>{
    setValue(param)

  }
  const handleButtonClick=(param)=>{
    const boundHandleClick = handleClick.bind(null,param);
    boundHandleClick()
  }
  return (
    <div>
      <h1>Hello StackBlitz!  {value}</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={() => handleButtonClick((prev)=>prev+1)}>
        Click me with dynamic binding
      </button>
    </div>
  );
}
