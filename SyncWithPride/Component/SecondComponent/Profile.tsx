import React, { useState } from "react";
import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import ModalLogout from "../SixthComponent/ModalLogout";

export const Profile: React.FunctionComponent = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="main">
      <aside className="profile-hamburger">
        <div className="profile">
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
          <div className="row">
            <div className="icon">
              <FontAwesomeIcon icon={faHouse} />
            </div>
            <p className="name">Home</p>
          </div>
          <div className="row">
            <div className="icon">
              <FontAwesomeIcon icon={faCalendarDays} />
            </div>
            <p className="name">Booking</p>
          </div>
          <div className="row">
            <div className="icon">
              <FontAwesomeIcon icon={faAddressCard} />
            </div>
            <p className="name">About us</p>
          </div>
          <div className="row">
            <div className="icon">
              <FontAwesomeIcon icon={faRightFromBracket} />
            </div>
            <p
              className="name openModalBtn"
              onClick={() => {
                setModalOpen(true);
              }}
              onTouchStart={() => {
                setModalOpen(true);
              }}
            >
              Log out
            </p>
          </div>

          {modalOpen && <ModalLogout setOpenModal={setModalOpen} />}
        </div>

        <button type="button" className="button">
          Close
        </button>
      </aside>
    </div>
  );
};
