import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO } from "../utils/constants";
import Darkmode from "./Darkmode";
import UserContext from "../utils/UserContext";
const Header = () => {
  //  const[btn_name,setbtn_name]=useState(null);
  const [darkmodetoogle,setdarkmodetoogle]=useState(false);
  // const {loggedUser}=useContext(UserContext);
  return (
    <div className="header-container  dark:tw-bg-[#832a2afa]">
      <div className="logo ">
        <img src={darkmodetoogle?"https://i.postimg.cc/tR86fW24/yummy-high-resolution-logo-white-transparent.png":LOGO} alt="logo" />
      </div>
      <div className="">
        <ul className="nav-items ">
          <li><Link to="/" className="nav-link dark:tw-text-zinc-200" aria-label="nav-link">HOME</Link></li>
          <li><Link to="/about" className="nav-link dark:tw-text-zinc-200" aria-label="nav-link">ABOUT</Link></li>
          <li><Link to="/contact" className="nav-link dark:tw-text-zinc-200" aria-label="nav-link">CONTACT</Link> </li>
          <li>
          <Link to="/cart" className="nav-link dark:tw-text-zinc-200" aria-label="nav-link"><i className="ri-shopping-cart-fill tw-text-xl"></i></Link>
          </li>
          <li>
            {/* <button id="login-btn" aria-label="nav-login-logout-button" onClick={()=>{
               btn_name==="Login"?setbtn_name("Logout"):setbtn_name("Login");
            }}>
              {btn_name}
            </button> */}
            <Darkmode darkMode={darkmodetoogle} setdarkMode={setdarkmodetoogle}/>
          </li>
          {/* <li>{loggedUser}</li> */}
        </ul>
      </div>
    </div>
  );
};
export default Header;

