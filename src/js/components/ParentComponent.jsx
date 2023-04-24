import React, { useState } from "react";
import FilterMenu from "./FilterMenu";
import GetApi from "./GetApi";

function ParentComponent() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
  };

  return (
    <div>
      <FilterMenu handleSearch={handleSearch} />
      <GetApi searchTerm={searchTerm} />
    </div>
  );
}

export default ParentComponent;
