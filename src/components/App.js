
import React from "react";
import './../styles/App.css';
import {useState} from "react";

const App = () => {

  let [count, setCount] = useState(0)
  return (
    <div>
      <p style={{fontFamily:"bold"}}>Button clicked {count} times</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Click me</button>
    </div>
  )
}

export default App
