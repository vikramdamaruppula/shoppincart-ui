import React from "react";
import logo from "../../Assets/sidebar/logo.svg";
import frame9 from "../../Assets/sidebar/Frame9.svg";
import active from "../../Assets/sidebar/active.svg";
import fourdots from "../../Assets/sidebar/fourdots.svg";
import bag from "../../Assets/sidebar/Bag.svg";
import chat from "../../Assets/sidebar/Chat.svg";
import setting from "../../Assets/sidebar/Setting.png";
import user from "../../Assets/sidebar/user.svg";
import category from "../../Assets/sidebar/Category.svg";
import banner from "../../Assets/sidebar/banner.svg";
import music from "../../Assets/sidebar/Logout.png";

import "./index.css";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <aside className="aside-container">
      <div className="main-container">
        <div className="main-container-2">
          <div className="item-container">
            <img
              onClick={() => navigate("/")}
              src={logo}
              alt="logo"
              className="img-logo"
            />
          </div>
          <div className="item-container item-container-2">
            <img src={category} alt="logo" className="img-all" />
            <span className="bag">3</span>
            <img src={bag} alt="logo" className="img-all" />
            <img src={user} alt="logo" className="img-all" />
            <img src={active} alt="logo" className="img-all" />
            <span className="chat">3</span>
            <img src={chat} alt="logo" className="img-all" />
            <img src={setting} alt="logo" className="img-all" />
          </div>
          <div className="item-container item-container-3">
            <img src={banner} alt="logo" className="img-all" />
            <img src={music} alt="logo" className="img-all" />
          </div>
          <div className="item-container item-container-4">
            <img src={frame9} alt="logo" className="img-all" />
          </div>

          <div className=" mobile-container">
            <img src={bag} alt="logo" className="img-all" />
            <img src={chat} alt="logo" className="img-all" />
            <img src={setting} alt="logo" className="img-all" />
            <img src={frame9} alt="logo" className="img-all" />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
