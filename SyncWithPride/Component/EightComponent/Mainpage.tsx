import React from "react";
import "./Mainpage.css";

export const Mainpage: React.FunctionComponent = () => {
  return (
    <div className="app">
      <div className="profile">
        <img
          src="https://i.ibb.co/j8JtSVk/profile-img.jpg"
          alt=""
          className="image"
        />
      </div>

      <div className="main">
        <div className="component">
          <div className="seats">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
          </div>
          <div className="bench"></div>
          <div className="seats">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
          </div>
        </div>

        <div className="component">
          <div className="seats">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
          </div>
          <div className="bench"></div>
          <div className="seats">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
          </div>
        </div>

        <div className="component">
          <div className="seats">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
          </div>
          <div className="bench"></div>
          <div className="seats">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
          </div>
        </div>

        <div className="component">
          <div className="seats">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
          </div>
          <div className="bench long"></div>
          <div className="seats side">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
          </div>
        </div>

        <div className="Athoercomponent">
          <div className="bench left"></div>
          <div className="seats athoer">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
          </div>
        </div>

        <div className="component rightc">
          <div className="seats rights">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
          </div>
        </div>

        <div className="bench rightb"></div>

        <div className="component anotherc">
          <div className="seats rights">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
          </div>
        </div>

        <div className="bench toright"></div>
        <div className="bench torighta"></div>
      </div>
    </div>
  );
};
