import React from 'react';
import './App.css';
import { TextField } from './TextField';
import { Counter } from './Counter';


const App = () => {

  return (<><TextField text="Hello" person={{ firstname: "June", lastname: "Pan" }} />
    <Counter>
     {(count,setCount)=><div>{count}<button onClick={()=>setCount(count+1)}>+</button></div>}
    </Counter></>)

}
export default App;
