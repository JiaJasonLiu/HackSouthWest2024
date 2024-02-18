// import '../index.css';
import '../css/profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import axios from "axios";

import Cookies from "universal-cookie";
import ContentCard from '../components/contentCard';
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
      <div className='profile'>
        <h1 style = {{ margin: '50px' }}>Welcome {name}</h1>
        {/*
        <img className = 'pfpimage1' src = 'https://www.svgrepo.com/show/137352/money-bag.svg' alt = 'bag of money' width="500px" height="500px"/>
        */}
        <div className='dashboard'>
          <Row>
          <Col className='positions border'>
            <h5>Positions</h5>
            {/*
            <ContentCard className='stock' member={'NVDA'} text={'Shares: 7.2 @$726.16'}></ContentCard>
              <li>IBM - 1.2 Shares</li>
              <li>AMD - 5 Shares</li>
              NVDA - 7 Shares
            */}
          </Col>
          <Col className='moneySaved border'>
            <h3>Money Saved:</h3>
            <h4>$1,000,000</h4>
          </Col>
          </Row>
          
          <div className='portfolio border'>
            <h5>Portfolio Oveview</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsam sint suscipit quos veniam blanditiis consequatur impedit nesciunt! Quod vitae quos iusto commodi laboriosam exercitationem maxime sed natus repellendus quis?
            </p>
          </div>
        </div>
        <h3>Point Count: {points}</h3>
      </div>
    </div>
  );
}

// UPDATE WITH BACKEND MONGOOSE DB TO HAVE CRUD DELETE METHODS TO DELETE ACCOUNT

export default Profile;
