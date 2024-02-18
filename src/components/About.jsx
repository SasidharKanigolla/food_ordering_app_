// import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="mt-4 ml-4 ">
        <h1 className="text-2xl font-bold">About Us</h1>
        {/* <User name={"Sasidhar (Function)"} /> */}
        <UserClass name={"Sasidhar (Class)"} location={"Eluru"} />
      </div>
    );
  }
}

export default About;
