import React, { useEffect, useState } from "react";
import "./Footer.css";
import Currentyear from "../../Assets/Currentyear";

const Footer = () => {
  const currentyear = Currentyear();
  return (
    <div className="footer">
      <div className="d-flex mt-5">
        <p className="footertext">
          <a className="anchertag" href="#">Terms of Service</a> &nbsp;&nbsp;{" "}
          <a className="anchertag" href="#">Privacy Policy</a> &nbsp;&nbsp;{" "}
          <a className="anchertag" href="#">Cookie Policy</a> &nbsp;&nbsp;{" "}
          <a className="anchertag" href="#">Accessibility</a>
        </p>
        <p className="Holdings">© {currentyear} NextTrip Holdings, Inc.</p>
      </div>
    </div>
  );
};

export default Footer;
