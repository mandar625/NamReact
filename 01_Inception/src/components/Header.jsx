import { useEffect, useState } from 'react';

import { LOGO_URL } from "../utils/constant";
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
  const [btName, setBtname] = useState("login")
  const onlineStatus = useOnlineStatus()

  // if their is no dependancy array useEffect caled at every render
  // if their is  dependancy array  empty [] useEffect caled at initial render render
  // if we puit insidedependancy array then it wll only be called when dependancy changes

  // console.log("header render");

  // useEffect(()=>{
  //   console.log("useEff is called");
  // },[])
  // useEffect(() => {
  //   console.log("useEff is called");
  // }, [btName])


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
          <li>Online Status: { onlineStatus ? "✅"  :"🔴"} </li>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/about" >About</Link></li>
          <li><Link to="/contact" >Conatct Us</Link></li>
          <li><Link to="/Grocery" >Grocery</Link></li>

          <li>Cart</li>
          <button
            style={{ padding: "0 10px", cursor: "pointer" }}
            onClick={() => {

              btName === "login" ? setBtname("logout") : setBtname("login")
            }}
          >{btName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

