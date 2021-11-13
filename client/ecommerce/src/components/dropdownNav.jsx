import React from "react";
import { Link } from "react-router-dom";

const DropdownNav = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-3 text-center items-center bg-green-200 "
          : "hidden"
      }
      onClick={toggle}
    >
      <Link to="/" className="p-4 hover:bg-green-400 ">
        Home
      </Link>
      <Link to="/menu" className="p-4 hover:bg-green-400">
        Menu
      </Link>

      <Link to="/contact" className="p-4 hover:bg-green-400">
        Contact
      </Link>
    </div>
  );
};

export default DropdownNav;
