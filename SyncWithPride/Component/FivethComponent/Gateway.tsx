import React, { useState } from "react";
import "./Gateway.css";
import ModalBooking from "../SeventhComponent/ModalBooking";
import { useNavigate } from "react-router-dom";

export const Gateway: React.FunctionComponent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="main2">
      <div className="gateway">
        <div className="head2">
          <hr />
          <p className="title ">Book a Seat</p>
        </div>

        <div className="selection">
          <div className="buttons">
            {/* Date picker */}
            <button type="button">Date</button>
            {/* Time picker */}
            <button type="button">Time</button>
          </div>
        </div>

        <div className="info1">
          <h2 className="tsx"> Seat no. 33 </h2>
          <p className="addr1">
            <p>Old Nagardas Road,</p>
            <p>Nr Andheri Metro Station,</p>
            <p>Andheri (East)</p>
          </p>
          <p className="status">
            Status: <span> not booked </span>
          </p>
        </div>

        <div className="buttons">
          <button
            type="reset"
            onClick={() => {
              navigate("/mainpage");
            }}
          >
            {" "}
            Cancel{" "}
          </button>
          <button
            type="submit"
            className="book openModalBtn"
            onClick={() => {
              setModalOpen(true);
            }}
            onTouchStart={() => {
              setModalOpen(true);
            }}
          >
            {" "}
            Book{" "}
          </button>
        </div>

        {modalOpen && <ModalBooking setOpenModal={setModalOpen} />}
      </div>
    </div>
  );
};
