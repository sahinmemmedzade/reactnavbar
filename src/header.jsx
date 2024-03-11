import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
          <section id="nav1">
             <nav id="nav">
                <div className="logo">
                    <h2>Justice.</h2>
                </div>
                <div class="menulinks">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/practices">Practices areas</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/attorneys">Attorneys</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact us</Link></li>
                    </ul>
                </div>
        </nav>
    </section>
    </div>
  )
}

export default Header