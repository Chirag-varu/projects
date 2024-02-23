import React from "react";
import "./ModalBooking.css";

interface ModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalBooking: React.FC<ModalProps> = ({ setOpenModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Do you want to book a Seat?</h1>
        </div>
        <div className="footer">
          <button className="no"
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            no
          </button>
          <button className="yes">yes</button>
        </div>
      </div>
    </div>
  );
}

export default ModalBooking;
