import React from 'react';
import ContentCSS from  './Content.module.css';

const Nav = () => {
    return(
        <div className="card">
            <p>welcome to react js.i am learning javascript for first time.it is quite difficult but very intresting.</p>
            <button className ={ContentCSS.btn}>Read more</button>
        </div>
    )
}

export default Nav