import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FighterList.css";

const FighterList = () => {
  const [fighters, setFighters] = useState([]);

  useEffect(() => {
    // Fetch fighters data from the backend
    axios
      .get("/api/fighters")
      .then((res) => {
        setFighters(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="fighterListContainer">
      <h1 className="fighterListTitle">Fighter List</h1>
      {fighters && fighters.length > 0 ? (
        <ul className="fighterList">
          {fighters.map((fighter) => (
            <li key={fighter._id} className="fighterListItem">
              <div className="fighterProfile">
                <h2 className="fighterName">{fighter.profile.name}</h2>
                <p className="fighterInfo">Record: {fighter.profile.record}</p>
                <p className="fighterInfo">Division: {fighter.profile.division}</p>
                <p className="fighterInfo">Location: {fighter.profile.location}</p>
                <p className="fighterInfo">Age: {fighter.profile.age}</p>
                <p className="fighterInfo">Height: {fighter.profile.height}</p>
                <p className="fighterInfo">Weight: {fighter.profile.weight}</p>
                <p className="fighterInfo">Reach: {fighter.profile.reach}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="fighterNoResults">No fighters found</p>
      )}
    </div>
  );
};

export default FighterList;
