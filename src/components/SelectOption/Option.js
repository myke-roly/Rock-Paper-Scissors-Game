import React from "react";

const Option = props => {

  return (
    <div className="option" onClick={props.onClick}>
      <img src={`images/${props.option}`} alt={props.option} />
    </div>
  );
};


export default Option;
