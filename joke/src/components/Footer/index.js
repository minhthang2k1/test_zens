import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <p className="line-footer"></p>
      <div className="content">
        <p className="desc">
          This website is created as part of Hlsolutions program. The materials contained on this website are provided for general information only and do not consitute any form of advice. HLS assumes no responsibility for the accuracy of any particular statement and accepts no liability for any loss or damage which may arise from reliance on the information contained on this site.
        </p>
        <p>
          Copyright 2021 HLS
        </p>
      </div>
    </div>
  );
};

export default Footer;