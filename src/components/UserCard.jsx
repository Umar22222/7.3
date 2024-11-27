import React, { useState } from "react";

const UserCard = ({ user }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="card">
      <img src={user.image} alt={`${user.firstName} ${user.lastName}`} />
      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <p>Email: {user.email}</p>
      {showMore ? (
        <div>
          <p>Age: {user.age}</p>
          <p>Phone: {user.phone}</p>
          <p>Address: {user.address.city}, {user.address.state}</p>
        </div>
      ) : null}
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "See Less" : "See More"}
      </button>
    </div>
  );
};

export default UserCard;
