import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div
        className="row "
        style={{
          textDirection: "none",
          backgroundColor: "rgba(0,0,255,.1)",
        }}
      >
        <div className="col-2">
        <Link to="/home">
          <i className="fa fa-home ">Home</i>
        </Link>
        <Link to="/about">
        <i className="fa fa-home ">Home</i>
        </Link>
        <Link to="/about">
        <i className="fa fa-home ">Home</i>
        </Link>
        <Link to="/about">
        <i className="fa fa-home ">Home</i>
        </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;


