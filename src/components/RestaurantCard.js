import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="restaurant logo"
        src={CDN_URL + cloudinaryImageId}
      // src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.info.cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}⭐ ⏱️ 38 mins</h4>
      <h4>{costForTwo}</h4>
      {/* <button className="text-white bg-green-500 p-1 rounded-lg">Add +</button> */}
    </div>
  );
};

export default RestaurantCard;

