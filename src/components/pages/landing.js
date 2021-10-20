import React from 'react'
import "./style.css"
import {Link} from 'react-router-dom'
const LandingPage = () => {
  return(
    <div className="landingPage grid">
        <div className="flex">
          <div className="flex-column">
            <h1>Commited to the future</h1>
            <button>Discover me</button>
          </div>
          <img alt="welcome" src="img/landing/landing.png"/>
        </div>
        <div>
          <img alt="category" src="img/landing/L4.jpg" />
          <Link className="link" to="/">Descover me</Link>
        </div>
        <div>
          <img alt="category" src="img/landing/L8.webp" />
          <Link className="link" to="/">Descover me</Link>
        </div>
        <div>
          <img alt="category" src="img/landing/L10.jpg" />
          <Link className="link" to="/">Descover me</Link>
        </div>
        <div>
          <img alt="category" src="img/landing/L9.webp" />
          <Link className="link" to="/">Descover me</Link>
        </div>
        <div>
          <img alt="category" src="img/landing/L11.jpg" />
          <Link className="link" to="/">Descover me</Link>
        </div>
        <div>
          <img alt="category" src="img/landing/L6.webp" />
          <Link className="link" to="/">Descover me</Link>
        </div>
    </div>

   )

 }

export default LandingPage