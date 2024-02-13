import React from "react";
import "./Landingpage.css";
import TM_Logo from "./../../Assets/Images/TM_Logo.png";
import TM_profile from "./../../Assets/Images/userProfile.png";
import TM_searchIcon from "./../../Assets/Images/images.png";
import TM_Homeicon from "./../../Assets/Images/Home.png";
import TM_bucketlisticon from "./../../Assets/Images/bucketlist.png";
import TM_Personicon from "./../../Assets/Images/Person.png";
import TM_Likeicon from "./../../Assets/Images/Like.png";
import TM_Settingsicon from "./../../Assets/Images/Settings.png";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Landingpage = () => {
  return (
    <div>
      <div className="row">
        <div className="d-flex nav_color">
          <div>
            <img src={TM_Logo} alt="logo" className="imagesize" />
          </div>
          <div>
            <div className="searchbtn">
              <img
                src={TM_searchIcon}
                alt="Search Icon"
                className="search-icon"
              />
              <input type="text" placeholder="Start exploring..." />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
