import React, { useState } from "react";
import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCalendarDays, faAddressCard, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import ModalLogout from "../SixthComponent/ModalLogout";
import { useNavigate } from "react-router-dom";

export const Profile: React.FunctionComponent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="main3">
      <aside className="profile-hamburger">
        <div className="profile1">
          <img
            src="https://i.ibb.co/j8JtSVk/profile-img.jpg"
            alt=""
            className="image"
          />
          <div className="detail">
            <p className="Dname">Chirag Varu</p>
            <p className="Dmail">chiragvaru03@gmail.com</p>
          </div>
        </div>

        <div className="rows">
          <div
            className="row"
            onClick={() => {
              navigate("/mainpage");
            }}
          >
            <div className="icon">
              <FontAwesomeIcon icon={faHouse} />
            </div>
            <p className="name">Home</p>
          </div>
          <div
            className="row"
            onClick={() => {
              navigate("/Booking");
            }}
          >
            <div className="icon">
              <FontAwesomeIcon icon={faCalendarDays} />
            </div>
            <p className="name">Bookings</p>
          </div>
          <div
            className="row"
            onClick={() => {
              navigate("/Aboutus");
            }}
          >
            <div className="icon">
              <FontAwesomeIcon icon={faAddressCard} />
            </div>
            <p className="name">About us</p>
          </div>
          <div
            className="row"
            onClick={() => {
              setModalOpen(true);
            }}
            onTouchStart={() => {
              setModalOpen(true);
            }}
          >
            <div className="icon">
              <FontAwesomeIcon icon={faRightFromBracket} />
            </div>
            <p className="name openModalBtn">Log out</p>
          </div>

          {modalOpen && <ModalLogout setOpenModal={setModalOpen} />}
        </div>

        <button
          type="button"
          className="button"
          onClick={() => {
            navigate("/mainpage");
          }}
          onTouchStart={() => {
            navigate("/mainpage");
          }}
        >
          Close
        </button>
      </aside>
    </div>
  );
};
