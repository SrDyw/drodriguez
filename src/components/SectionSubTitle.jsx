import React, { useEffect, useState } from "react";

export default function SectionSubTitle({ text, keywords }) {
  const [richText, setRichText] = useState([]);
  let createdText = false;

  useEffect(() => {
    if (richText.length == 0 && createdText == false) {
      const splitedText = text.split(" ");
      splitedText.forEach((t) => {
        if (keywords.indexOf(t) != -1)
          setRichText((prev) => [...prev, { text: t, isKeyword: true }]);
      });
      createdText = true;
    }
  }, [text]);

  return (
    <h2 className="section-subtitle">
      {richText &&
        richText.map((t, key) =>
          t.isKeyword ? (
            <span className="subtitle-highlight" key={key}>
              {t.text}{" "}
            </span>
          ) : (
            t.text + " "
          )
        )}
    </h2>
  );
}
