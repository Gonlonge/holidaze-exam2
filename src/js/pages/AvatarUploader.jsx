import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_MEDIA } from "../ApiEndpoints";

function AvatarUploader({ name, onSuccess }) {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setIsError(false);
    try {
      const formData = new FormData();
      formData.append("avatar", file);
      const endpoint = API_MEDIA.replace(":name", name);
      const response = await fetch(endpoint, {
        method: "PUT",
        body: formData,
      });
      setIsLoading(false);
      if (response.ok) {
        if (onSuccess) {
          onSuccess();
        }
        navigate("/profile");
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit" disabled={!file || isLoading}>
        {isLoading ? "Uploading..." : "Upload Avatar"}
      </button>
      {isError && <div>Failed to upload avatar</div>}
    </form>
  );
}

export default AvatarUploader;
