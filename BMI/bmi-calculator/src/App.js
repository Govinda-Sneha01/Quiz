import React,{useState} from 'react';
import './index.css'

function App(){

  // state
  const [weight,setWeight]=useState(0)
  const [height,setHeight]=useState(0)
  const [bmi,setBmi]=useState('')
  const [message,setMessage]=useState('')


let imgsrc=''
let calcBmi= (event)=> {
  //prevent submitting
  event.preventDefault()

  if(weight === 0||height === 0) {
    alert ('please enter a valid weight & height')}
    else {
      let bmi=(weight/(height * height))
      setBmi(bmi.toFixed(1))

      if(bmi < 25){
        setMessage('underweight')
      }else if (bmi >= 25 && bmi < 30) {
        setMessage('normal')
      }else{
        setMessage('overweight')
      }
      }
    }
    

    let reload =()=> {
      window.location.reload()
    }
  return(
  <div className="app">
    <div className='Container'>
    <img src="/bmi.jpg" alt="logo" ></img>
      <h2 className='center'>BMI calculator</h2>
      <form onSubmit={calcBmi}>
        <div>
          <label>Weigth</label>
          <input value={weight} onChange={(e)=>setWeight(e.target.value)} />
        </div>
        <div>
        <label>Height</label>
       <input value={height} onChange={(e)=>setHeight(e.target.value)} />
        </div>
        <div>
        <button className ='btn' type='submit'>
          submit
        </button>
        <button className ='btn btn-outline'onClick={reload} type='submit'>reload</button>
        </div>
        </form>
 
         <div ClassName='center'>
          <h3>your BMI is:{bmi}</h3>
          <p>{message}</p>
          </div>

         <div className='img-container'>
         <img src={imgsrc} alt=''></img>
         </div>
         </div>
         </div>

);
}

export default App;
