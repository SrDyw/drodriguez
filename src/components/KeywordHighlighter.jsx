import React from 'react';

function KeywordHighlighter({ text, keywords, elementClass = 'keyword_element' }) {
  const highlightKeywords = (text, keywords) => {
    let highlightedText = text;
    keywords && keywords.forEach(keyword => {
      const regex = new RegExp(keyword, "gi"); // "gi" para hacer coincidencias sin distinción entre mayúsculas y minúsculas
      highlightedText = highlightedText.replace(regex, `<span>${keyword}</span>`);
    });
    return { __html: highlightedText };
  };

  return (
    <div className={elementClass}
      dangerouslySetInnerHTML={highlightKeywords(text, keywords)}
    />
  );
}

export default KeywordHighlighter;
