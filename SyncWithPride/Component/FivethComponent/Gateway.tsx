import React, { useState } from "react";
import "./Gateway.css";
import ModalBooking from "../SeventhComponent/ModalBooking";

export const Gateway: React.FunctionComponent = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="main">
      <div className="gateway">
        <div className="head">
          <hr />
          <p className="title">Book a Seat</p>
        </div>

        <div className="selection">
          <div className="buttons">
            {/* Date picker */}
            <button type="button">Date</button>
            {/* Time picker */}
            <button type="button">Time</button>
          </div>
        </div>

        <div className="info">
          <h2> Seat no. 33 </h2>
          <p className="addr">
            <p>Old Nagardas Road,</p>
            <p>Nr Andheri Metro Station,</p>
            <p>Andheri (East)</p>
          </p>
          <p className="status">
            Status: <span> not booked </span>
          </p>
        </div>

        <div className="buttons">
          <button type="reset"> Cancel </button>
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
