import { bussines_info } from "../models/constants";

export const go = (url) => {
  window.location.href = url;
};

export const open_whatsap = (number = "52497742") => {
  go(`https://wa.me/${number}`);
};

export const copy_in_clipboard = (text) => {
  const number = text;
  navigator.clipboard.writeText(number);

  // console.log(number);
};
