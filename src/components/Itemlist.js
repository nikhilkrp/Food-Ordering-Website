import React from 'react'
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams, useResolvedPath } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../slice/cartSlice"

const Itemlist = ({ items, dummy }) => {

    const { resId } = useParams();
    const { itemCards } = useRestaurantMenu(resId);
    const dispatch = useDispatch()


    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }

    return (
        <div className="menu-main">
            {items.map((item) => (
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
                        <button onClick={() => handleAddItem(item)} className="bg-green-500 rounded-lg p-1">Add</button>
                        <img src={CDN_URL + item.card.info.imageId} alt="Menu Info" />
                    </div>
                </div>
            ))}
        </div>

    )
}

export default Itemlist
