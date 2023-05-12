import React from "react";

export const SearchInput = ({ searchInput, handleSearchInputChange }) => {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        value={searchInput}
        onChange={handleSearchInputChange}
        placeholder="Search..."
      />
      <button className="btn btn-outline-secondary" type="button">
        Search
      </button>
    </div>
  );
};

export default SearchInput;
