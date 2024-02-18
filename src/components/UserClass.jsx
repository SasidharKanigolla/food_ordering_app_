/* eslint-disable react/prop-types */
import React from "react";
import UserContext from "../utils/UserContext";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Sasidhar",
        location: "Eluru",
        avatar_url: "http://dummy-photo",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/SasidharKanigolla");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url, bio, email } = this.state.userInfo;

    return (
      <div className="user-card flex items-center border border-solid border-black m-4 p-4 rounded-lg">
        <div className="mr-4">
          <img src={avatar_url} alt="img" className="w-32 rounded-full" />
        </div>
        <div className="flex flex-col justify-between">
          <div className="font-bold">
            loggedIn User
            <UserContext.Consumer>
              {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
            </UserContext.Consumer>
          </div>
          <h1 className="font-bold py-1">Name : {name}</h1>
          <h4 className="py-1">Location : {location} </h4>
          <h5 className="py-1">Contact : @{email || "sasidhar_kanigolla"}</h5>
          <h4 className="py-1">Bio : {bio}</h4>
        </div>
      </div>
    );
  }
}

export default UserClass;
