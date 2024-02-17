// import '../index.css';
// import '../profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from "react";
import axios from "axios";

import Cookies from "universal-cookie";
const cookies = new Cookies();
const token = cookies.get("TOKEN");

const name = 'Yousuf Ahmed'

// UPDATE WITH BACKEND AND API TO UPDATE POINTS AFTER SUCCESSFUL SEARCH

var points = 200;

function Profile() {

  useEffect(() => {
    // set configurations for the API call here
    const configuration = {
      method: "get",
      url: "http://localhost:3001/profile",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios(configuration)
    .then((result) => {
      // assign the message in our result to the message we initialized above
    })
    .catch((error) => {
      error = new Error();
    });
  }, [])

  return (
    <div className="Home">
      <div>
        <h1 style = {{ margin: '50px' }}>Welcome {name}</h1>
        <img className = 'pfpimage1' src = '../images/logo192.png' alt = 'img1'></img>
        <h3>Point Count: {points}</h3>
      </div>
    </div>
  );
}

// UPDATE WITH BACKEND MONGOOSE DB TO HAVE CRUD DELETE METHODS TO DELETE ACCOUNT

export default Profile;
