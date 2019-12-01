import React from "react";

const Boot = ({ colorImg, imgAleatoria }) => {
  return (
    <div>
      <img
        style={colorImg(imgAleatoria)}
        src={`images/${imgAleatoria}`}
        alt={`images/${imgAleatoria}`}
      />
    </div>
  );
};

export default Boot;
