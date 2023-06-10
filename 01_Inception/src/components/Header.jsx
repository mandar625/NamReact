import React, { useState } from 'react';

import { LOGO_URL } from "../utils/constant";


const Header = () => {

  const [btName , setBtname] = useState("login")
  return (
    <div className="header">
      <div className="logoContainer">
        <img
          className="logo"
          src={LOGO_URL}
        ></img>
      </div>
      <div className="navLinks">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Conatct Us</li>
          <li>Cart</li>
          <button 
          style={{ padding: "0 10px", cursor: "pointer" }}
           onClick={() => {
             
            btName === "login"  ?setBtname("logout")  :setBtname("login")  }}
             >{btName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

