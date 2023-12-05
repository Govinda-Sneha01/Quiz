import './App.css';
import { useState,useEffect } from 'react';
function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const[formData,setFormData] = useState({

    userid: '',
    password:'',
    name:'',
    phonenum:'',
    address:'',
    country:'',
    zipcode:'',
    email:'',
    gender:'',
    language:'',
    about:'',
  })
  const  [formError,setFormError] = useState({})
  const onChangeHandler = (event) => {
  console.log(event)
    if(event.target.name === 'Languages') {

        let copy = {...formData}

        if(event.target.checked){
          copy.language.push(event.target.value)
        }else{
         copy.language = copy.language.filter(el => el !== event.target.value )
        }
        setFormData(copy)
           
    }else{
    setFormData(()=>({
      ...formData,
      [event.target.name]: event.target.value
    }))
  }
}

const validateForm = () => {
  let err = {}

    if(formData.userid === ''){
    err.userid = 'userid required!'
  }
  if(formData.password === ''){
    err.password = 'password required!'
  }
  if(formData.name === ''){
    err.name = 'name required!'
  }
  if(formData.phonenum === ''){
    err.phonenum = 'phonenum required!'
  }
  if(formData.address === ''){
    err.address = 'address required!'
  }
  if(formData.zipcode === ''){
    err.zipcode = 'zipcode required!'
  }
  if(formData.email === ''){
    err.email = 'email required!'
  }
  if(formData.gender === ''){
    err.gender = 'gender required!'
  }
  if(formData.language === ''){
    err.language = 'language required!'
  }
  if(formData.about === ''){
    err.about = 'optional!'
  }
  setFormError({...err})
return Object.keys(err).length < 1;
}
const onSubmitHandler = (event) => {
  event.preventDefault()
  console.log("Form Data:", formData)
  let isValid = validateForm()

  if(isValid){
    alert('In valid form')
  }else{
    alert('Submitted')
  }
  console.log(isValid)
}
useEffect(() => {
  fetch("https://restcountries.com/v3.1/all")
    .then(response => {
      
      return response.json();
    })
    
    .then(data => setCountries(data))
    
    .catch(error => console.error("Error fetching data: ", error));
}, []);
console.log("API Response:", countries) // Log the response object
return (
     <div className="App">
     <form onSubmit={onSubmitHandler}>
    
      <h1>Registration Form</h1>
       
        <div className="form-group">
           <label htmlFor="userid" className="form-label">User Id</label>
          <input className="form-control" id="Userid" onChange={onChangeHandler} />
          <span className='non-valid'>{formError.userid}</span>
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input className="form-control" password="Password" onChange={onChangeHandler} />
          <span className='non-valid'>{formError.password}</span>
        </div>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name</label>
          <input className="form-control" name="Name" onChange={onChangeHandler}  />
          <span className='non-valid'>{formError.name}</span>
        </div>
        <div>
        <label htmlFor="phonenum" className="form-label">Phone Num</label>
          <input className="form-control" num="Phonenum" onChange={onChangeHandler} />
          <span className='non-valid'>{formError.phonenum}</span>
        </div>
        <div>
        <label htmlFor="address" className="form-label">Address</label>
          <input className="form-control" address="Address" onChange={onChangeHandler}  />
          <span className='non-valid'>{formError.address}</span>
        </div>
        <div>
        <label htmlFor="Country" className="form-label">Country</label>
        <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
        <option value="">Select a country</option>
        {countries.map((country, index) => (
          <option key={index} value={country.name.common}>
            {country.name.common}
          </option>
        ))}
       </select>
        </div>
        <div>
        <label htmlFor="zipcode" className="form-label">Zip Code</label>
          <input className="form-control" code="Zipcode" onChange={onChangeHandler} />
          <span className='non-valid'>{formError.zipcode}</span>
        </div>
        <div>
        <label htmlFor="email" className="form-label">Email</label>
          <input className="form-control" num="email" onChange={onChangeHandler}  />
          <span className='non-valid'>{formError.email}</span>
        </div>
        <div className="form-group">
          <label htmlFor="gender" className="form-label">Gender</label>
        </div>
        <div>
          <input type="radio" name="gender" value="male" onChange={onChangeHandler}/>
          
          <label htmlFor="male">Male</label>
        </div>
        <div>
          <input type="radio" name="gender" value="female" onChange={onChangeHandler} />
          
          <label htmlFor="female">Female</label>
        </div>
        <span className='non-valid'>{formError.gender}</span>
        <div className="form-group">
        <label htmlFor="languages" className="form-label">Languages</label>
        </div>
        <div>
          <input type="checkbox" name="languages" value="english" onChange={onChangeHandler} />
          <label htmlFor="english">English</label>
        </div>
        <div>
          <input type="checkbox" name="languages" value="nonenglish" onChange={onChangeHandler} />
          <label htmlFor="nonenglish">Non-English</label>
        </div>
        <span className='non-valid'>{formError.languages}</span>
        <div>
        <label htmlFor="about" className="form-label">About</label>
          <input className="form-control" name="about" onChange={onChangeHandler} />
          <span className='non-valid'>{formError.about}</span>
        </div>
        <div className="form-group">
        <button  className="btn" type="submit"> Submit

        </button>

        </div>
       </form>
      </div>
    )
}
export default App;
