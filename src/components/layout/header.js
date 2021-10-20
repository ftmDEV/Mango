import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import './style.css'
import {Link, NavLink} from 'react-router-dom'

function Header() {
    const {basket}=useContext(GlobalContext)
    // const [showMenu,setShowMenu]=useState(false)
    return (
        <div className="header">
            <>
                <Link className="logo flex" to="/">
                    <img alt="logo" src="img/logo.png"/>
                </Link>
                <ul className="flex">
                    <NavLink 
                        className="navLink" 
                        to="/new" 
                        >New Collection
                    </NavLink>
                    <NavLink 
                        className="navLink" 
                        to="/womens"
                    >Womens</NavLink>
                    <NavLink 
                        className="navLink" 
                        to="/mens"
                    >mens</NavLink>
                    <NavLink 
                        className="navLink" 
                        to="/teen"
                    >Teen</NavLink>
                    <NavLink 
                        className="navLink" 
                        to="/kids"
                    >kids</NavLink>
                </ul>
                <div className="flex icons">
                    <Link to="/account">
                        <div className="accountIcon">
                            <img alt="account" src="/img/user.svg" />
                        </div>
                    </Link>
                    <Link to="/wishlist">
                        <div className="wishlistIcon">
                            <img alt="wishlist" src="img/heart.png"/>
                        </div>
                    </Link>
                    <Link to="/basket">
                        <div className="basketIcon">
                            <img alt="basket" src="img/bag.svg"/>
                            <div>{basket.length}</div>
                        </div>
                        
                    </Link>
                </div>
            </>
        </div>
    )
}
export default  Header