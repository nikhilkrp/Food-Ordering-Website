import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams, useResolvedPath } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { FiClock } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai"; 
import { useDispatch } from "react-redux";
import {addItem} from "../slice/cartSlice"


const RestaurantsMenu = () => {
  const { resId } = useParams();
  const { restaurantInfo, itemCards } = useRestaurantMenu(resId);
  const dispatch = useDispatch()

  if (!restaurantInfo) return <Shimmer/>;

  const {
    name,
    cuisines,
    costForTwoMessage,
    cloudinaryImageId,
    avgRating,
    deliveryTime,
  } = restaurantInfo;
 const handleAddItem=(item)=>{
  dispatch(addItem(item));
 }


  
  return (
    <div className="menu">
    {/* header section in menu */}
      <header className="menu-header">
        <div className="menu-header-left">
          <img src={CDN_URL + cloudinaryImageId} alt="Restaurant Info" />
        </div>
        <div className="menu-header-right">
          <div className="top">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
          </div>
          <div className="bottom">
            <h4 className="avg-rating">
              <span
                className="icons"
                style={{
                  position: "relative",
                  top: "2px",
                  marginRight: "3px",
                }}
              >
                <AiOutlineStar />
              </span>
              <span>{avgRating}</span>
            </h4>
            <h4 className="time">
              <span
                className="icons"
                style={{
                  position: "relative",
                  top: "2px",
                  marginRight: "3px",
                }}
              >
                <FiClock />
              </span>
              <span> {deliveryTime} MINS</span>
            </h4>
            <h3>{costForTwoMessage}</h3>
          </div>
        </div>
      </header>
{/* menu item section */}
      <div className="menu-main">
        <h2>Menu</h2>
        <h3 className="items">{itemCards.length} items</h3>
        <div className="menu-main-card-container">
       
          {itemCards.map((item) => (
            <div key={item.card.info.id} className="menu-card">
              <div className="menu-card-left">
                <h2 className="menu-name">{item.card.info.name}</h2>
                <h3 className="menu-price">
                  ₹
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                </h3>
                <h4 className="menu-description">
                  {item.card.info.description}
                </h4>
              </div>
              <div className="menu-card-right">
               <button onClick={()=>handleAddItem(item)} className="bg-green-500 rounded-lg p-1">Add</button>
                <img src={CDN_URL + item.card.info.imageId} alt="Menu Info" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantsMenu;
