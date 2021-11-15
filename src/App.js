import './App.css';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <div className="outerBox">
        <div className="header">
          <div className="headerBox">
            <header>
              <div className="logo">LOGO</div>
              <div className="menu d-flex">
                <ul className="flex-70">
                  <li><a>ABOUT</a></li>
                  <li><a>COMMUNITY</a></li>
                  <li><a>LOCATION</a></li>
                  <li><a>OUR MENU</a></li>
                  <li><a>RECIPES</a></li>
                </ul>
                <ul className="flex-30">
                  <li><a>CONTACT</a></li>
                  <li><a>LOGIN</a></li>
                </ul>
              </div>
            </header>
            <div className="imageText">
              <h2>THE BEST FOODIE</h2>
              <h1>EXPERIENCE</h1>
              <p>NOW IN LONDON</p>
            </div>
            <div className="infoWrapper">
              <h4>Request Info</h4>
            </div>
          </div>
        </div>
        <div className="blankSpace" />
        <div className="locationMap">
          <img src={require("./images/locationMap").default} alt="map" />
          <div className="locationAddress">
            <h1>LOCATION</h1>
            <p>12 Upper St. Martin’s Lane
              WC2H 9FB, London</p>
          </div>
          <div className="zoomInOutWrapper">
            <img src={require("./images/zoomInOut").default} alt="zoom-in-out" />
          </div>
        </div>
      </div>
    </React.Fragment >
  );
}

export default App;
