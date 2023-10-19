import React from "react";
import KeywordHighlighter from "../KeywordHighlighter";
import { motion } from "framer-motion";
import {fadeIn} from '../../libs/variants.js'

export default function OfferCard({ offer, id, keywords }) {
  return (
    <motion.div
      className="offer_card"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      initial={"hidden"}
      variants={fadeIn("right", 0, 0.8)}
    >
      <div className="offer_key">
        <span>{id + 1}</span>
        <p>{offer.title}</p>
      </div>
      <KeywordHighlighter text={offer.desc} keywords={keywords} />
    </motion.div>
  );
}
