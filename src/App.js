import React from "react";
import "./style.css";

export default function App() {
  const[value,setValue]=React.useState("")
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
      <button onClick={() => handleButtonClick('Hello')}>
        Click me with dynamic binding
      </button>
    </div>
  );
}
