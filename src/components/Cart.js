import React from "react"
import { useDispatch, useSelector } from "react-redux";
import RestaurantCard from "./RestaurantCard";
import RestaurantsMenu from "./RestaurantMenu";
import Itemlist from "./Itemlist";
const Cart = () => {
  const cartItems = useSelector((store)=>store.cart.items);
  return (
    
     <div>
      {cartItems.length===0&&(<h1>Cart is Empty . Add Item to cart</h1>)}
      <Itemlist items={cartItems}/>
     </div>
  )
}
export default Cart;