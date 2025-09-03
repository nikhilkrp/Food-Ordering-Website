import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
  // * State variable - Super Powerful variable

  const [searchText, setSearchText] = useState("");

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  // here we have done this so that after filtering we can still have the original data in listOfRestaurants
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  //   console.log("listOfRestaurants", listOfRestaurants);

  useEffect(() => {
    // console.log("useEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    const restaurants = json?.data?.cards?.find(
      (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    // update state - listOfRestaurants
    setListOfRestaurants(restaurants || []);
    setFilteredRestaurants(restaurants || []);
  };

    const onlineStatus = useOnlineStatus();

    if (!onlineStatus) {
      return (
        <h1 style={{ textAlign: "center", marginTop: "50px", color: "black" }}>
          Looks like you're offline! Please check your internet connection.
        </h1>
      );
    }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">

      {/* search container */}
      <div className="search-container">
        <input
          className="search"
          type="text"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            console.log(searchText);
            const filtered = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase.includes()(searchText.toLowerCase())
            );
            setFilteredRestaurants(filtered);
          }}
        >
          search
        </button>
      </div>
      {/* filtered data */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const topRated = filteredRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredRestaurants(topRated);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurants.length === 0 ? (
          <h2>No restaurants found.</h2>
        ) : (
          filteredRestaurants.map((restaurant) => (
         <Link key={restaurant.info?.id} to={`/restaurants/${restaurant.info?.id}`}> <RestaurantCard  resData={restaurant} /></Link>   

          ))
        )}
      </div>
    </div>
  );

};


export default Body;
