import React from "react";
import "./homepage.css";

import logo from "../../asset/icons/Logo.png";
import icon from "../../asset/icons/Icon.png";
import menu from "../../asset/icons/Menu.png";
import rating from "../../asset/icons/Rating.png";
import trailer from "../../asset/icons/Button.png";
import seeMore from "../../asset/icons/See_more.png";
import fb from "../../asset/icons/fb.png";
import yt from "../../asset/icons/yt.png";
import twt from "../../asset/icons/twt.png";
import ig from "../../asset/icons/ig.png";

const Homepage = () => {
  return (
    <section id="home">
      <div className="px-[50px]" id="hero">
        <nav
          id="navbar"
          className="py-[20px]  bg-none flex flex-row justify-between mb-[60px]"
        >
          <div id="logo" className="">
            <img src={logo} alt="" className="h-[35px]" />
          </div>
          <div
            id="search"
            className="flex flex-row h-[35px] w-[400px] justify-between border-solid border-white border-[1px] rounded-md"
          >
            <input
              type="text"
              className="bg-inherit w-[100%] px-[5px]"
              placeholder="What do you want to watch?"
            />
            <img src={icon} alt="" className="m-[10px] h-[15px] " />
          </div>
          <div id="signIn">
            <img src={menu} alt="" className="h-[35px]" />
          </div>
        </nav>

        <div className="text-white w-[250px] h-[300px] text-left flex flex-col justify-evenly mt-[20px]">
          <p className="text-4xl font-extrabold tracking-wide leading-10">
            John Wick 3 : Parabellum
          </p>
          <img src={rating} alt="" className="h-[20px] w-[160px]" />
          <p className="text-xs">
            John Wick is on the run after killing a member of the international
            assassins' guild, and with a $14 million price tag on his head, he
            is the target of hit men and women everywhere.
          </p>
          <img src={trailer} alt="" className="h-[40px] w-[150px]" />
        </div>
      </div>

      <div className="px-[50px] mt-[20px]" id="featured">
        <div className="flex flex-row justify-between">
          <p className="text-4xl font-bold">Featured Movie</p>
          <img src={seeMore} alt="" className="w-[79px] h-[24px]" />
        </div>
      </div>

      <div className="w-[492px] h-[145px] m-auto flex flex-col" id="footer">
        <div className="flex flex-row justify-evenly w-[240px] m-auto">
          <img src={fb} alt="" className="social-icons" />
          <img src={ig} alt="" className="social-icons" />
          <img src={twt} alt="" className="social-icons" />
          <img src={yt} alt="" className="social-icons" />
        </div>

        <div className="flex flex-row justify-evenly m-auto w-[100%]">
          <p className="footer-text">Conditions of Use</p>
          <p className="footer-text">Privacy & Policy</p>
          <p className="footer-text">Press Room</p>
        </div>
        <p className="footer-text m-auto">© 2021 MovieBox by David Uwandu</p>
      </div>
    </section>
  );
};

export default Homepage;
