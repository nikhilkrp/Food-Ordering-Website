import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import axios from "axios";


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
    console.log("hi")
    const {data} = await axios.get("https://backend2-1-a7yz.onrender.com/restaurants");
    console.log(data);

    const restaurants = data?.data?.cards?.find(
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
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
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
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center p-6 mt-10">
        <p>© 2025 Food Cart. All rights reserved.</p>
      </footer>
    </div>
  );

};


export default Body;
