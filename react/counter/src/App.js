import React ,{useState} from 'react';
import './App.css';

function App() {
  const[count,setcount]=useState(0)
  const increment = ()=>{
    setcount(count+1)
  }
  const decrement = ()=>{
    setcount(count-1)
  }

  return (
    <div className="App">
      <h1 className="heading">Counter App</h1>
      <p>Count={count}</p>
      <button className="btn-1" onClick={increment}>Increment</button>
      <button className="btn-2" onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
