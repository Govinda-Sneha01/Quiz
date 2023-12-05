import React from 'react'
import HeaderCSS from './Header.module.css';

const Header = () => {
    return (
        <header className="card">
            <h1>Main title</h1>
            <button className={HeaderCSS.btn }>Buy now</button>
        </header>
    )
}

export default Header