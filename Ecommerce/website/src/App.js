import './App.css';
import React, {useState} from 'react';
import img11 from '../src/images/img11.jpg';
import img22 from '../src/images/img22.jpg';
import img33 from '../src/images/img33.jpg';
import img99 from '../src/images/img99.jpg';
import img55 from '../src/images/img55.jpg';
import img44 from '../src/images/img44.jpeg';
import img222 from '../src/images/img222.jpeg';
import img111 from '../src/images/img111.jpeg';
function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  const deletefromCart = (item) => {
    setCart([...cart,item]);
  };

  return (
    
    <div className="App">
      <h1>E-commerce Website</h1>

      <div className="image-row">
        <div className="image-container">
          <img className='img1' src={img11} alt="img" height={200} width={200} />
          <p>$140</p>
          <button onClick={() => addToCart(img11)}>Add to Cart</button>
          <button className="container" onClick={deletefromCart}>Delete</button>
        </div>
        <div className="image-container">
          <img className='img1' src={img22} alt="img" height={200} width={200} />
          <p>$140</p>
        </div>
        <div className="image-container">
          <img className='img1' src={img33} alt="img" height={200} width={200} />
          <p>$140</p>
        </div>
        <div className="image-container">
          <img className='img111' src={img111} alt="img" height={200} width={200} />
          <p>$140</p>
        </div>
        <div className="img-container">
        <div className="cart">
  <h2>Cart</h2>
  <ul>
  <div className="cart">
  <h2>Cart</h2>
  <ul>
    {cart.find((item, index) => (
      <li key={index}>
        <img src={item} alt={`item${index}`} height={50} width={50} />
      </li>
    ))}
  </ul>
</div>
  </ul>
</div>
        </div>
      </div>

      <div className="imag-row">
        <div className="image-container">
          <img className='img1' src={img99} alt="img" height={200} width={200} />
          <p>$140</p>
        </div>
        <div className="image-container">
          <img className='img1' src={img55} alt="img" height={200} width={200} />
          <p>$140</p>
        </div>
        <div className="image-container">
          <img className='img1' src={img44} alt="img" height={200} width={200} />
          <p>$140</p>
        </div>
        <div className="image-container">
          <img className='img1' src={img222} alt="img" height={200} width={200} />
          <p>$140</p>
        </div>
        
      </div>
     
    </div>
    
  );
}

export default App;
