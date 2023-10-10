import { motion } from "framer-motion";
import { fadeIn } from "../../libs/variants.js";
import React from "react";


{/* <motion.div
className="service_card"
whileInView={"show"}
viewport={{ once: false, amount: 0 }}
initial={"hidden"}
variants={fadeIn("up", 0, 0.8)}
> */}

export default function ServicesCardNew({ main, complement }) {
  return (
    <div className="service_card">
      <p>
        <span>{main}</span>
        <span>{" " + complement}</span>
      </p>
    </div>
  );
}
