/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unsafe-optional-chaining */
import Shimmer_menu from "./Simmer_menu.jsx";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.jsx";
import RestaurantCategory from "./RestaurantCategory.jsx";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) {
    return <Shimmer_menu />;
  }
  //Res info destructuring
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  //Menu destructuring
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map(
        (category, index) => (
          <RestaurantCategory
            key={category.card.card.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        )
        //   key={category.card.card.title}
        //   data={category.card.card}
        // />
      )}
    </div>
  );
};

export default RestaurantMenu;
