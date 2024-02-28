import React from "react";
// import "./App.css";
import { Login } from "./Component/FirstComponent/login";
import { Profile } from "./Component/SecondComponent/Profile";
import { Aboutus } from "./Component/ThirdComponent/Aboutus";
import { Booking } from "./Component/FourthComponent/Booking";
import { Gateway } from "./Component/FivethComponent/Gateway";
import { Mainpage } from "./Component/EightComponent/Mainpage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Mainpage" element={<Mainpage />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/Gateway" element={<Gateway />} />
          <Route path="/Aboutus" element={<Aboutus />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
