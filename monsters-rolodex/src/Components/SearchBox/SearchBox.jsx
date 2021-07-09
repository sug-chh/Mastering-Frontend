import React from "react";
import "./SearchBox.css";

function SearchBox({ onInputChange, placeholder }) {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={onInputChange}
    ></input>
  );
}
export default SearchBox;
