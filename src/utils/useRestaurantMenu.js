import { useState, useEffect } from "react";
import { MENU_API } from "./constants";


// custom hook to fetch and manage restaurant menu data
const useRestaurantMenu = (resId) => {
    // state to hold restaurant info(menu+details)
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json.data);
      } catch (error) {
        console.error("Failed to fetch menu:", error);
        setResInfo(null);
      }
    };
    fetchMenu();
  }, [resId]);

//Extracting necessary details from the fetched data
  const restaurantInfo = resInfo?.cards?.find((card) => card?.card?.card?.info)
    ?.card?.card?.info;

  const regularCards = resInfo?.cards?.find(
    (card) => card?.groupedCard?.cardGroupMap?.REGULAR
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const itemCardContainer = regularCards?.find((c) => c?.card?.card?.itemCards);

  const itemCards = itemCardContainer?.card?.card?.itemCards;

  // console.log(itemCards);

  return { restaurantInfo, itemCards };
};
export default useRestaurantMenu;