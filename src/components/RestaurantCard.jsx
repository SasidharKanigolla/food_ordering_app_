/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable no-unsafe-optional-chaining */
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resObj } = props;
  // console.log(resObj);
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resObj?.info;
  return (
    <div
      data-testid="resCard"
      className="p-4 m-4 w-[270px] h-auto bg-gray-200 hover:bg-gray-300 shadow-xl"
    >
      <img
        className="rounded-lg h-[200px] w-full object-cover"
        src={CDN_URL + cloudinaryImageId}
        alt=""
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export const withOfferLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white rounded-lg m-1 mt-2 px-4">
          {props.resObj.info.aggregatedDiscountInfoV3.header +
            " " +
            props.resObj.info.aggregatedDiscountInfoV3.subHeader}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
