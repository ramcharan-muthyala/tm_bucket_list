import React, { useState } from "react";
import TM_Logo from "./../../Assets/Images/TM_Logo.png";
import TM_profile from "./../../Assets/Images/Random Board.png";
import TM_searchIcon from "./../../Assets/Images/images.png";
import TM_Homeicon from "./../../Assets/Images/Home.png";
import TM_bucketlisticon from "./../../Assets/Images/bucketlist.png";
import TM_Personicon from "./../../Assets/Images/Person.png";
import TM_Likeicon from "./../../Assets/Images/Like.png";
import TM_Settingsicon from "./../../Assets/Images/Settings.png";
import TM_Groupicon from "./../../Assets/Images/Group 26.png";
import TM_Img from "./../../Assets/Images/Prague Board.png";
import TM_Random from "./../../Assets/Images/Random Board.png";
import TM_Rectangle44 from "./../../Assets/Images/Rectangle 58.png";
import TM_Rectangle61 from "./../../Assets/Images/Rectangle 61.png";
import TM_Rectangle54 from "./../../Assets/Images/Rectangle 54.png";
import TM_Rectangle57 from "./../../Assets/Images/Rectangle 57.png";
import TM_Rectangle63 from "./../../Assets/Images/Rectangle 63.png";
import TM_Rectangle56 from "./../../Assets/Images/Rectangle 56.png";
import TM_Frame16 from "./../../Assets/Images/Frame 16 1.png";
import TM_likeIcon from "./../../Assets/Images/Like Icon.png";
import TM_Ellipse from "./../../Assets/Images/Ellipse 25.png";
import TM_bucketlist from "./../../Assets/Images/bucketlist.png";
import TM_Frame41 from "./../../Assets/Images/Frame 4 1.png";
import TM_ShareIcon from "./../../Assets/Images/Share Icon.png";
import TM_Vector19 from "./../../Assets/Images/Vector 19.png";
import TM_Rectangle58 from "./../../Assets/Images/Rectangle 58.png";
import TM_Rectangle59 from "./../../Assets/Images/Rectangle 59.png";
import TM_Rectangle60 from "./../../Assets/Images/Rectangle60.png";
import "./Home.css";

const Home = () => {
  const originalText =
    "New York City in the rain is my favorite place in the entire world. The lights, the sounds, the #feeling is just...";
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="homebody">
      <div className="row ">
        <div className="d-flex topnav_color">
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
          <div className="margin_in_between ">
            <img src={TM_profile} className="profileimg" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-1  ">
              <div class="sidenav-icons sidenav">
                <div class="sidenav-icon">
                  <img src={TM_Homeicon} alt="Icon 1" />
                </div>
                <div class="sidenav-icon">
                  <img src={TM_bucketlisticon} alt="Icon 2" />
                </div>
                <div class="sidenav-icon">
                  <img src={TM_Personicon} alt="Icon 3" />
                </div>
                <div class="sidenav-icon">
                  <img src={TM_Likeicon} alt="Icon 4" />
                </div>
                <div class="sidenav-icon">
                  <img src={TM_Settingsicon} alt="Icon 5" />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-7 centercontaint">
              <div>
                <h2>Adventure starts here...</h2>
                <div>
                  <button className="createbtn">
                    <img src={TM_Groupicon} /> Create Post
                  </button>
                </div>
              </div>
              <div className="mainboard">Popular Trip Boards</div>
              <div className="containt">
                <div className="subcontaint">
                  <img src={TM_Img} className="subcontaint1" />
                </div>
                <div className="subcontaint">
                  <div>
                    <img src={TM_Rectangle57} className="horizontalImg" />
                  </div>
                  <div>
                    <img src={TM_Rectangle56} className="horizontalImg" />
                  </div>
                </div>
              </div>
              <div className="bottomcls">
                <img src={TM_Rectangle63} className="horizontalbottomImg" />

                <div className="seemore">See More</div>
              </div>

              <div className="popularpost">Popular Posts</div>
              <div className="">
                <div className="cardmain shadow-lg  mb-5 bg-body rounded">
                  <div className="row  mainprofileimg">
                    <div
                      className="col-1  "
                      style={{ margin: "5px", width: "50px" }}
                    >
                      {" "}
                      <img
                        class="roundedImg"
                        src={TM_Frame16}
                        alt="Card image"
                      />
                    </div>
                    <div className="col-3 mt-3">Ryan H kdks</div>
                    <div className="col-6  mt-3" style={{ textAlign: "right" }}>
                      <label className="">23 hours ago</label>
                    </div>
                    <div className="col-1 mt-3">
                      <label>...</label>
                    </div>
                  </div>

                  <img
                    className="card-img-top"
                    src={TM_Frame41}
                    alt="Card image"
                  />

                  <div className="card-body">
                    <div className="row   rowcomments ">
                      <div className="col-12 mb-3">
                        <div className="row ">
                          <div className="col-2 ">
                            <img className="TM_likeIcon" src={TM_likeIcon} /> 32
                          </div>
                          <div className="col-2">
                            <img className="TM_Ellipse" src={TM_Ellipse} /> 12
                          </div>
                          <div className="col-2">
                            <img
                              className="TM_bucketlist"
                              src={TM_bucketlist}
                            />{" "}
                            11
                          </div>
                          <div className="col-6">
                            <img className="TM_ShareIcon" src={TM_ShareIcon} />
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="card-text">
                          {isExpanded
                            ? originalText
                            : `${originalText.slice(0, 107)} ...`}
                        </p>
                        {originalText.length > 107 && (
                          <a onClick={toggleText}>
                            {isExpanded ? "read less" : "read more"}
                          </a>
                        )}
                      </div>
                      <div className="comments">
                        <input
                          type="text"
                          className=""
                          placeholder="Start exploring..."
                        />
                        <img
                          src={TM_Vector19}
                          alt="Search Icon"
                          className="commentpost"
                        />
                      </div>
                    </div>

                    {/* <div className='row '> */}
                    <div className="topdiscover">
                      <h4>Top Disoveries</h4>
                    </div>
                    <div className="topdiscoverimg">
                      <div>
                        <video
                          controls
                          autoPlay
                          muted
                          loop
                          className="topdisimg"
                        >
                          <source
                            src="C:/Users/techo/OneDrive/Desktop/Just%20do%20it.%20%23travel%20%23shorts%20%23traveling.mp4"
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                      </div>

                      <img src={TM_Rectangle59} className="topdisimg"></img>
                      <button className="btn"></button>

                      <img src={TM_Rectangle60} className="topdisimg"></img>
                      <button className="btn"></button>

                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-4 rightnav">
              <div className="card rightcard">
                <div className="centercard">
                  <h4>Popular & Trending</h4>
                  <div className="cards">
                    <img src={TM_Img} className="centerimg" />
                    Americans are flocking to Mexico in March. Here's why.
                  </div>
                  <div className="cards">
                    <img src={TM_Img} className="centerimg" />
                    Another piece of content.
                  </div>
                  <div className="cards">
                    <img src={TM_Random} className="centerimgfull" />
                    {/* <button className="bottom-left-button">Button</button> */}
                  </div>
                  <div className="cards">
                    <img src={TM_Img} className="centerimgfull" />
                  </div>
                  <div className="cards">
                    <img src={TM_Rectangle44} className="centerimgfull" />
                  </div>
                  <div className="cards">
                    <div className="hashtags">
                      #BackpackingTips #BestTripIEverTook #WhenITravel
                      #Europe2024 #Cambodia #SpringBreak2024
                    </div>
                  </div>
                </div>
                <div className="cardvideo">
                  <img src={TM_Rectangle61} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
