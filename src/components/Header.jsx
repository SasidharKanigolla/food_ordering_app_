import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  // let btnName = "Login";
  const [btnName, setbtnName] = useState("Login");
  const onlinestatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  //selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-[#dff3f4] shadow-lg ">
      <div className="logo-container">
        <img className="w-32" src={LOGO_URL} alt="LOGO" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status : {onlinestatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/cart">cart - {cartItems.length} items</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
