import React from "react";

//COMPONENTS
import errorImage from "../assets/images/404.jpg";

function Error() {
  return (
    <div className="errorPage">
      <img src={errorImage} alt="" />
    </div>
  );
}

export default Error;
