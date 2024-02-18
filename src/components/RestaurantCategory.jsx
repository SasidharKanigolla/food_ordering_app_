/* eslint-disable react/prop-types */
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, setShowIndex, showItems }) => {
  const headerclick = () => {
    setShowIndex();
  };

  return (
    <div>
      {/* // Accordian Head */}
      <div className="w-6/12 m-auto my-4 bg-gray-100 shadow-lg p-4 rounded-lg">
        <div
          className="flex justify-between cursor-pointer"
          onClick={headerclick}
        >
          <span className="font-bold">
            {data?.title} ({data?.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {/* Accordian body */}
        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
