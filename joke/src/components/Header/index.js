import React from "react";
import images from "../../assets/images";
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <div id="header">
      <img src={images.logo} style={{ marginLeft: "60px" }} alt="logo"/>
      <div className="avatar">
        <div className="name">
          <p>Handicrafted by</p>
          <h5>Jim HLS</h5>
        </div>
        <img src={images.avatar} alt="avatar"/>
      </div>
    </div>
    </div>
  );
};

export default Header;
