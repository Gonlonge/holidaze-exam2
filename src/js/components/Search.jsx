import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

const Search = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchTerm);
  };

  return (
    <Form onSubmit={handleSubmit} inline>
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        value={searchTerm}
        onChange={handleChange}
      />
      <Button variant="background-color-button " type="submit">
        Search
      </Button>
    </Form>
  );
};

export default Search;
