import React from 'react';
import "./navbar.css";

import tv from "../../asset/icons/tv.png";
import icon from "../../asset/icons/Icon.png";
import menu from "../../asset/icons/Menu.png";

const navbar = ()=> {
  return (
    <nav id="navbar" className="pt-[20px] relative bg-none">
        <div className="flex flex-row mt-[20px] justify-between">
          <div id="logo" className=''>
              <img src={tv} alt="" className="" />
              <img src={icon} alt="" className="className" />
          </div>
          <div id="search" className="flex flex-col ">
              <input type="text" className='' />
              <img src="../asset/icons/Icon.png" alt="" />
          </div>
          <div id="signIn">
              <img src={menu} alt="" />
          </div>
        </div>
    </nav>
  )
};

export default navbar;