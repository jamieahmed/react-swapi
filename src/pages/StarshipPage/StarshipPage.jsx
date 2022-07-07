import React from "react";
import { useLocation, Link } from "react-router-dom";

const StarshipPage = () => {
  const location = useLocation();
  return (
    <>
      <div className="StarshipPage">
        <p>{location.state.starship.name}</p>
        <p>{location.state.starship.model}</p>
        <Link to="/">Back Home</Link>
      </div>
    </>
  );
};

export default StarshipPage;
