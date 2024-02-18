/* eslint-disable react/no-unknown-property */
import RestaurantCard, { withOfferLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const onlinestatus = useOnlineStatus();

  const [listOfRest, setListofRest] = useState([]);
  const [filteredRest, setFilteredRest] = useState([]);

  const [searchText, setSearchText] = useState("");
  const RestaurantOfferLabel = withOfferLabel(RestaurantCard);

  const { loggedInUser, setUserInfo } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_API);

    const json = await data.json();

    setListofRest(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRest(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (onlinestatus === false) return <h1>You are currently offline!!</h1>;
  return filteredRest.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex justify-between ">
        <div className="search m-2 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black rounded-lg px-1"
            value={searchText}
            onChange={(e) => {
              
              setSearchText(e.target.value);
              // console.log(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 m-4 bg-green-100 border rounded-xl"
            onClick={() => {
              // console.log(searchText);
              const filteredRest = listOfRest.filter((res) =>
                res?.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              // console.log(filteredRest);
              if (filteredRest.length != 0) setFilteredRest(filteredRest);
              else {
                {
                  alert("No results from the search");
                  setSearchText("");
                  setFilteredRest(listOfRest);
                }
              }
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-2 p-4 flex items-center">
          <button
            className="bg-gray-300 px-4 py-1 rounded-xl mr-3"
            onClick={() => {
              let filteredList = listOfRest.filter(
                (res) => res?.info.avgRating > 4
              );
              setFilteredRest(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
          {/* <button
            className="bg-gray-300 px-4 py-1 rounded-xl"
            onClick={() => {
              setFilteredRest(listOfRest);
            }}
          >
            Show All Restaurants
          </button> */}
        </div>
        <div className="search m-2 p-4 flex items-center">
          <label className="font-bold px-2">User Name : </label>
          <input
            // maxlength="50"
            type="text"
            className="border border-solid border-black rounded-lg px-1"
            value={loggedInUser}
            onChange={(e) => {
              //React context
              setUserInfo(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="flex flex-wrap ">
        {filteredRest.map((res) => (
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
            {res?.info?.aggregatedDiscountInfoV3 !== undefined ? (
              <RestaurantOfferLabel resObj={res} />
            ) : (
              <RestaurantCard resObj={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
