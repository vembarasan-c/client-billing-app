import { useState } from "react";
import "./SearchBox.css";

const SearchBox = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e) => {
    const text = e.target.value;
    setSearchText(text);
    onSearch(text);
  };

  return (
    <div className="search-box-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search items..."
        value={searchText}
        onChange={handleInputChange}
      />
      <button className="search-button">
        <i className="bi bi-search"></i>
      </button>
    </div>
  );
};

export default SearchBox;
