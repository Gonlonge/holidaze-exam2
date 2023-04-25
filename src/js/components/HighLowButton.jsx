import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const HighLowButton = () => {
  const [price, setPrice] = useState("Low");

  const handleHighClick = () => {
    setPrice("High");
  };

  const handleLowClick = () => {
    setPrice("Low");
  };

  return (
    <div>
      <div>
        Price: {price}
        <div className="mt-2">
          <Button
            variant="primary"
            onClick={handleHighClick}
            className="background-color-button"
          >
            High
          </Button>
        </div>{" "}
        <div className="mt-2">
          <Button
            variant="secondary"
            onClick={handleLowClick}
            className="background-color-button"
          >
            Low
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HighLowButton;
