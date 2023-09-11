import React, { useState } from "react";
import { FaBars, FaArrowLeft } from "react-icons/fa";

export default function Navigator() {
  const [navState, setNavState] = useState(false);
  const handleButton = (e) => {
    setNavState((prev) => !prev);
  };

  const NavLink = ({ title, sectionID }) => {
    return (
      <li>
        <a href={sectionID} onClick={() => setNavState(false)}>
          {title}
        </a>
      </li>
    );
  };

  return (
    <nav className={`flex-center ${navState ? "nav_active" : ""}`} id="nav">
      <button className="flex-center" onClick={handleButton}>
        {navState ? <FaArrowLeft /> : <FaBars />}
      </button>
      <ul className="flex-center col g-40 nav_body">
        <NavLink sectionID={"#home"} title={"Home"} />
        <NavLink sectionID={"#services"} title={"Servicios"} />
        <NavLink sectionID={"#more"} title={"Conócenos"} />
      </ul>
    </nav>
  );
}
