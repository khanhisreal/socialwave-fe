import "./Header.css";
import logo from "../../assets/images/Header/socialwave_logo.png";
import dummyProfilePic from "../../assets/images/Header/dummy_avatar.png";
import ButtonNavigation from "./ButtonNavigation/ButtonNavigation";

import { MdApps } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { FaBell } from "react-icons/fa";

export default function Header() {
  return (
    <div className="container">
      <div className="left">
        <a href="">
          <img src={logo} alt="socialwave logo" />
        </a>
        <div className="search-bar">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search Socialwave" />
        </div>
      </div>
      <div className="right">
        <ButtonNavigation>
          <MdApps />
        </ButtonNavigation>
        <ButtonNavigation>
          <MdMessage />
        </ButtonNavigation>
        <ButtonNavigation>
          <FaBell />
        </ButtonNavigation>
        <ButtonNavigation>
          <img src={dummyProfilePic} alt="" />
        </ButtonNavigation>
      </div>
    </div>
  );
}
