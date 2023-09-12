import React, { useContext, useEffect, useState } from "react";
import { FaBars, FaArrowLeft } from "react-icons/fa";
import "./Navigator.css";
import { GlobalContext } from "../../assets/context/GlobalContext";

export default function Navigator() {
  const [navState, setNavState] = useState(false);
  const { setModalState } = useContext(GlobalContext);
  const handleButton = (e) => {
    setNavState((prev) => !prev);
  };

  // useEffect(() => {
  //   if (navState) setModalState({ open: false });
  // }, [navState]);

  const NavLink = ({ title, sectionID }) => {
    const handleLink = () => {
      setNavState(false);
      if (sectionID != "#services") setModalState({open:false})
    };
    return (
      <li>
        <a href={sectionID} onClick={handleLink}>
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
