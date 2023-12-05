import './App.css';
import { useState } from 'react';
function App(){
const [formError,setFormError]=useState({})
const [formdata,setFormdata] = useState({
  FirstName : '',
  LastName : '',
  Age : '',
  Address: '',
  PhoneNum: '',
  Gender: '',
})
const validateForm = () => {
  let err = {}

  if(formdata.FirstName === ''){
    err.FirstName = 'FirstName is required!'
  }
  if(formdata.LastName === ''){
    err.LastName = 'LastName is required!'
  }
  if(formdata.Age === ''){
    err.Age = 'Age is required!'
  }
  if(formdata.Address === ''){
    err.Address = 'Address is required!'
  }
  if(formdata.PhoneNum === ''){
    err.PhoneNum = 'PhoneNum must be in ten digits!'
  }
  if(formdata.Gender === ''){
    err.gender = 'Gender is required!'
  }
  setFormError({...err})
return Object.keys(err).length < 1;
}
const onSubmitHandler = (event) => {
  event.preventDefault()
  let isValid = validateForm()

  if(isValid){
    alert('In valid form')
  }else{
    alert('Submitted')
  }
  console.log(isValid)
}


return (
  <div className="App">
  <form onSubmit={onSubmitHandler}>
 
   <h1>Registration Form</h1>
    
     <div className="form-group">
        <label htmlFor="FirstName" className="form-label">First Name</label>
       <input className="form-control" id="First Name" />
       <span className='non-valid'>{formError.FirstName}</span>
     </div>
     <div className="form-group">
     <label htmlFor="LastName" className="form-label">Last Name</label>
     <input className="form-control" id="Last Name" />
     <span className='non-valid'>{formError.LastName}</span>
     </div>
     <div className="form-group">
      <label htmlFor="Age" className="form-label">Age</label>
      <input className="form-control" id="Age" />
      <span className='non-valid'>{formError.Age}</span>
     </div>
     <div className="form-group">
      <label htmlFor="Address" className="form-label">Address</label>
      <input className="form-control" id="Address"  />
      <span className='non-valid'>{formError.Address}</span>
     </div>
     <div className="form-group">
      <label htmlFor="PhoneNum" className="form-label">PhoneNum</label>
      <input className="form-control" id="PhoneNum" />
      <span className='non-valid'>{formError.PhoneNum}</span>
     </div>
     <div className="form-group">
      <label htmlFor="Gender" className="form-label">Gender</label>
     </div>
     <div>
          <input type="radio" name="gender" value="male"/>
          <label htmlFor="male">Male</label>
        </div>
      <div>
          <input type="radio" name="gender" value="female" />
          <label htmlFor="female">Female</label>
      </div>
      <div>
          <input type="radio" name="gender" value="others"/>
          <label htmlFor="others">others</label>
      </div>
      <span className='non-valid'>{formError.gender}</span>
      
      <div className="form-group">
        <button  className="btn" type="submit"> Submit

        </button>
        </div>
     </form>
     </div>
)
}

export default App;

     