import React from "react";
import { bussines_info } from "../models/constants";

export default function BussinesName({ type, styles }) {
  switch (type) {
    case "h1":
      return <h1 style={styles} className="bussisnes_name">{bussines_info.name}</h1>;
    case "h2":
      return <h2 style={styles} className="bussisnes_name">{bussines_info.name}</h2>;
    case "h3":
      return <h3 style={styles} className="bussisnes_name">{bussines_info.name}</h3>;
    case "h4":
      return <h4 style={styles} className="bussisnes_name">{bussines_info.name}</h4>;
    case "p":
      return <p style={styles} className="bussisnes_name">{bussines_info.name}</p>;
    case "span":
      return <span style={styles} className="bussisnes_name">{bussines_info.name}</span>;
    default:
      return <div style={styles} className="bussisnes_name">Tag not found!</div>;
  }
}
