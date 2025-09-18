import React, { useEffect, useState } from 'react'
import { LOGO_URL } from '../utils/constants'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'

const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("Login")
  // Subscribing to redux store
  const cartItems = useSelector((store)=>store.cart.items);

  useEffect(() => { console.log("use effect called") }, [btnNameReact])
  // const onlineStatus = useOnlineStatus();
  return (
    <div className='header'>
      <div className='logo-container'><img className='logo' src={LOGO_URL} alt='' /></div>
      <div className='nav-items'>
        <ul>
          <li>  <Link to="/">Home</Link></li>
          <li> <Link to="/about">About Us</Link></li>
          <li> <Link to="/contact">Contact us</Link></li>
          <li> <Link to="/grocery">Grocery</Link></li>
          <li> <Link to="/cart">Cart-{cartItems.length}</Link></li>
        </ul>

        <button className='login' onClick={() => {
          btnNameReact === "L ogin" ? setBtnNameReact("Logout") :
            setBtnNameReact("Login");
        }}>{btnNameReact}</button>
      </div>
    </div>
  )
}

export default Header
