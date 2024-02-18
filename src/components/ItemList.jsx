/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../redux/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.name}
          className="p-2 m-2 border-gray-300 border-b-2 text-left flex items-center "
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold">{item.card.info.name}</span>
              <span className="font-bold">
                {" "}
                - ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 my-[60px] mx-10 rounded-lg  bg-black text-white shadow-lg "
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            {item.card.info.imageId !== undefined ? (
              <img
                src={CDN_URL + item.card.info.imageId}
                //   onError="this.style.display = 'none';"
                alt=""
                className="h-[100px] w-full object-cover"
              />
            ) : (
              <p className="h-[100px]"></p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
