import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getStartShips } from "../../Services/sw.api";

const Starships = () => {
  const [Starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      const starShipsData = await getStartShips();
      setStarships(starShipsData.results);
    };
    fetchStarships();
  }, []);

  return (
    <>
      {Starships.length ? (
        <div className="starships-container">
          {Starships.map((starship) => (
            <Link
              className="starship-card"
              to="/starship"
              state={{ starship }}
              key={starship.name}
            >
              {starship.name}
            </Link>
          ))}
        </div>
      ) : (
        <>
          <h1>Loading...</h1>
        </>
      )}
    </>
  );
};

export default Starships;
