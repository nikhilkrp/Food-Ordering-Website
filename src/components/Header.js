import React, { useEffect, useState } from 'react'
import { LOGO_URL } from '../utils/constants'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'
import foodcart from "./foodcart1.png"


const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login")
  // Subscribing to redux store
  const cartItems = useSelector((store)=>store.cart.items);
  useEffect(() => { console.log("use effect called") }, [btnNameReact])
  // const onlineStatus = useOnlineStatus();
  return (
    <div className='header'>
      <div className='logo-container flex flex-col text-red-600 text-2xl font-semibold'><img className="h-20 p-2 rounded-3xl" src={foodcart} alt='' /></div>
      <div className='nav-items'>
        <ul>
          <li> <Link to="/">Home</Link></li>
          <li> <Link to="/about">About Us</Link></li>
          <li> <Link to="/contact">Contact us</Link></li>
          <li> <Link to="/grocery" >Grocery</Link></li>
          <li> <Link to="/cart">Cart-{cartItems.length}</Link></li>
        </ul>
        <button className='login' onClick={() => {
          btnNameReact === "Login" ? setBtnNameReact("Logout") :
            setBtnNameReact("Login");
        }}>{btnNameReact}</button>
      </div>
    </div>
  )
}
export default Header
