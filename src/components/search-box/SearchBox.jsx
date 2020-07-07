import React from "react";
import "./SearchBox.css";

const SearchBox = ({ placeholder, searching }) => {
  return (
    <>
      <input type="text" placeholder={placeholder} onChange={searching} />
    </>
  );
};

export default SearchBox;
