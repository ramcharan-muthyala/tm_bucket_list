import React, { useEffect, useRef, useState } from "react";
import TMlogo from "./../../Assets/Images/TMlogo.png";
import Rectangle69 from "./../../Assets/Images/Rectangle69.png";
import Rectangle44 from "./../../Assets/Images/Rectangle44.png";

import "./Signup.css";
import Footer from "../Footer/Footer";
import axios from "axios";
import Loginpopup from "./Loginpopup";
import { useNavigate } from "react-router-dom";

// import { Card } from "react-bootstrap";
const Signup = (lo) => {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();
  const signupRef = useRef(null);

  const [condition, setcondition] = useState((Boolean = true));
  const [imageUrl, setImageUrl] = useState([]);
  const [logincondition, setlogincondition] = useState((Boolean = false));
  // const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 768);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  const loginurl = "http://127.0.0.1:5000/auth/login";
  const signupurl = "http://127.0.0.1:5000/auth/register";
  const dynamicImageUrl = "http://127.0.0.1:5000/get_all_images/home";

  const [data, setData] = useState({
    emailid: "",
    password: "",
    dob: "",
  });

  const [login, setLogin] = useState({
    emailid: "",
    password: "",
  });

  const loginchange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    debugger;
    try {
      e.preventDefault();
      const Sinupdetails = {
        emailid: data.emailid,
        password: data.password,
        dob: data.dob,
      };
      const response = await axios.post(signupurl, Sinupdetails);
      if (response.status === 200) {
        alert("Suscussfully SignUp");
      } else {
        console.error("Login failed", response);
        alert("Login failed: " + response.statusText);
      }
    } catch {
      console.error("Login failed");
      alert("Plese enter Details ");
    }
  };

  const LoginDetails = async (e) => {
    debugger;
    e.preventDefault();

    try {
      const logindetails = {
        emailid: login.emailid,
        password: login.password,
      };
      const response = await axios.post(loginurl, logindetails);
      if (response.status === 200) {
        const userId = response.data.user_id;
        sessionStorage.setItem("user_id", userId);

        alert("Suscussfully login");
        navigate("/home");
      }
    } catch (error) {
      console.error("Login failed", error);
      alert("Invalid Credentials", error);
    }
  };

  const handleSignupClick = () => {
    signupRef.current.scrollIntoView({ behavior: "smooth" });
    setcondition(true);
    setlogincondition(false);
  };

  const handleClick = () => {
    signupRef.current.scrollIntoView({ behavior: "smooth" });

    setcondition(false);
    setlogincondition(true);
    // navigate("/home");
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/static-media")
      .then((res) => {
        setImages(res.data.image_urls);
        console.log("Response API images :", res.data.image_urls);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(dynamicImageUrl)
      .then((response) => {
        setImageUrl(response.data.data);
        console.log("Response Api data::::", response.data);
      })
      .catch((error) => {
        console.error("Error fetching image URLs:", error);
      });
  }, []);

  return (
    <div>
      <nav className="d-flex nav_color">
        <img
          src={images.TMlogo}
          alt="TMlogo"
          className="imagesize d-none d-lg-block"
        />
        <img src={images.logo} alt="TMlogo" className="d-block d-lg-none" />

        <div className="margin_in_between">
          {/* Conditionally render login and signup buttons or hamburger button */}
          <div className="d-lg-block d-none">
            <button className="login" onClick={handleClick}>
              Log In
            </button>
            <button className="signup ms-3" onClick={handleSignupClick}>
              Sign Up
            </button>
          </div>

          <div className="d-lg-none">
            {/* Render hamburger button for mobile */}
            <button className="hamburger" onClick={handleMobileMenuToggle}>
              ☰
            </button>

            {/* Render mobile menu */}
            {isMobileMenuOpen && (
              <div className="mobile-menu ">
                <div>
                  <button className="login" onClick={handleClick}>
                    Log In
                  </button>
                </div>
                <div>
                  <button className="signup " onClick={handleSignupClick}>
                    Sign Up
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      <div className=" ">
        <div className="background-container">
          <div className="position-absolute top-0 start-0   mt-3 ">
            <img src={Rectangle69} alt="img" className="d-none d-lg-block" />
          </div>

          <div className="mt-5">
            <center>
              <p className="plan_text">
                Plan your next trip with <br /> the world.
              </p>
              <p className="inspiration">
                Get inspiration. Explore pre-traveled itineraries.
                <br /> And save everything you need in one neat place.
              </p>
              <div>
                <button className="explire_button">Start Exploring</button>
              </div>
            </center>
          </div>

          <div className="position-absolute  end-0 mt-3  right-card">
            <img
              src={Rectangle44}
              alt="img"
              className="img-width d-none d-lg-block"
            />
          </div>
        </div>
      </div>
      <div className="">
        <div className="image-container ">
          {imageUrl.slice(0, 8).map((item, index) => (
            <div key={index} className="image-wrapper">
              <img
                src={item.image_url}
                alt={`Image ${index + 1}`}
                className="full-width "
              />
              <div className="image-text d-none d-lg-block">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <div className="box">
          <div className="rectangle">
            <div>
              <img src={images.layOut_1a} alt="layOut_1a" />
            </div>
            <div>
              <img src={images.layOut_1b} alt="layOut_1b" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=" ">
          <div className="explore ">
            <div className="explorecard">
              <img src={images.layOut_3a} alt="img" />
            </div>
            <div className="createcard">
              <img src={images.layOut_3b} alt="img" />
            </div>
          </div>
          <center>
            <div className="mt-5  mb-5 ">
              <img src={images.layOut_4} alt="img" className="imgwidth" />
            </div>
          </center>
        </div>
      </div>
      {/* ----------------------------Signup------------------------------------------ */}
      <div className="mt-5 " ref={signupRef}>
        <div className="background-login  ">
          <div className=" d-flex">
            <div className="planning ">
              <p className="ms-5  d-none d-lg-block">
                Start planning your
                <br /> next adventure today.
              </p>
              <img
                className="waterfall d-none d-lg-block"
                src={images.layout4a}
                alt="img"
              />
            </div>

            <div className="row">
              {condition && (
                <div className="card">
                  <div className=" p-3 ">
                    <div className="">
                      <div>
                        <form onSubmit={submit}>
                          <center>
                            {" "}
                            <img src={images.logo} alt="logo" />
                            <p className="welcometext">
                              Welcome to <br />
                              Travel Magazine
                            </p>
                            <div className="form-outline  mb-4">
                              <input
                                type="email"
                                id="typeEmailX"
                                onChange={handleInputChange}
                                name="emailid"
                                value={data.emailid}
                                className="form-control form-control-lg input-width "
                                placeholder="Email"
                              />
                            </div>
                            <div className="form-outline form-white mb-4 ">
                              <input
                                type="password"
                                id="typePasswordX"
                                onChange={handleInputChange}
                                name="password"
                                value={data.password}
                                className="form-control form-control-lg input-width"
                                placeholder="Password"
                              />
                              <div class="invalid-tooltip">
                                Please select a valid state.
                              </div>
                            </div>
                            <div className="form-outline form-white mb-2">
                              <input
                                type="text"
                                placeholder="Birthdate mm-dd-yyy"
                                id="typePasswordX"
                                onChange={handleInputChange}
                                name="dob"
                                value={data.dob}
                                className="form-control form-control-lg input-width"
                              />
                            </div>
                            <div>
                              <button className="explire_button">
                                Continue
                              </button>
                            </div>
                          </center>
                          <center className="acknowledge mt-4 ">
                            By Continuing, you agree to Travel Magazine’s
                            <br /> <b className="Terms">Terms of Service</b> and
                            acknowledge you’ve read
                            <br /> our <b className="Terms">Privacy Policy.</b>
                          </center>

                          <div>
                            <center className="acknowledge mt-3 ">
                              Already a member login?
                              <a href="#!" className="text-white-50 fw-bold">
                                Log in.
                              </a>
                            </center>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div>
                {logincondition && (
                  <div className="card p-3">
                    <form onSubmit={LoginDetails}>
                      <center>
                        <img src={images.logo} alt="logo" />
                        <p className="welcometext">
                          Welcome to <br />
                          Travel Magazine
                        </p>
                        <div className="form-outline  mb-4">
                          <input
                            type="email"
                            onChange={loginchange}
                            name="emailid"
                            // value={login.emailid}
                            className="form-control form-control-lg input-width "
                            placeholder="Email"
                          />
                        </div>
                        <div className="form-outline form-white mb-4 ">
                          <input
                            type="password"
                            onChange={loginchange}
                            name="password"
                            // value={login.password}
                            className="form-control form-control-lg input-width"
                            placeholder="Password"
                          />
                        </div>
                        <div>
                          <button className="explire_button">Continue</button>
                        </div>
                      </center>

                      <div>
                        <center className="acknowledge mt-3 ">
                          create New Account:
                          <a href="#!" className="text-white-50 fw-bold">
                            SignUp?
                          </a>
                        </center>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
