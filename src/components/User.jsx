/* eslint-disable react/prop-types */
const User = (props) => {
  return (
    <div className="user-card">
      <h3>Name : {props.name}</h3>
      <h4>Location : Eluru </h4>
      <h5>Contact : @sasidhar kanigolla</h5>
    </div>
  );
};

export default User;
