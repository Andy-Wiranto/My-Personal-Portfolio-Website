import React from "react";
import { Link } from "react-router-dom";

const GetInTouchButton = () => {
    return (
      <Link to="/ContactMe">
        <button className="btn btn-primary">
          Get In Touch
        </button>
      </Link>
    );
  };
  
  export default GetInTouchButton;