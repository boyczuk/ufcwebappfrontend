import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./userGym.css";

const UserGym = () => {
  const [userData, setUserData] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/users/me", {
          withCredentials: true,
        });
        setUserData(response.data);
        setLoggedIn(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (!loggedIn) {
    <Link to="/login"></Link>;
  }

  return (
    <div className="user-gym-container">
      <h1>Welcome {userData.name}!</h1>
      <p>Email: {userData.email}</p>
    </div>
  );
};

export default UserGym;
