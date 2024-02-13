import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./Components/Signup/Signup";
import Home from "./Components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landingpage from "./Components/Landingpage/Landingpage";

// import BucketList from "./Components/BucketList/BucketList";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </BrowserRouter>
      {/* <Landingpage /> */}
    </div>
  );
};

export default App;
