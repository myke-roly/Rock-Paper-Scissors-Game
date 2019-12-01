import React from "react";

//import boot
import Boot from "./Boot";

const Vs = props => {
  const { img, status, imgAleatoria, colorImg, playAgain } = props;
  return (
    <div className="vs">
      <div className="row mt-4">
        <div
          className={`col-lg-4 col-md-4 col-sm-12 left ${
            status === "winner" ? "shadow-winner" : ""
          }`}
        >
          <p className="title">YOU</p>
          <img
            style={colorImg(img)}
            src={`images/${img}`}
            alt={`images/${img}`}
          />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 align-self-center center">
          <h2
            className={`mb-4 ${
              status === "winner"
                ? "text-success"
                : status === "losser"
                ? "text-danger"
                : "text-warning"
            }`}
          >
            {status}
          </h2>
          <button className="btn btn-primary btn-lg" onClick={playAgain}>
            Play again
          </button>
        </div>
        <div
          className={`col-lg-4 col-md-4 col-sm-12 right ${
            status === "losser" ? "shadow-winner" : ""
          }`}
        >
          <p className="title">THE HOUSE</p>
          <Boot imgAleatoria={imgAleatoria} colorImg={colorImg} />
        </div>
      </div>
    </div>
  );
};

export default Vs;
