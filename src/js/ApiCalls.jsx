// This file contains all the API calls to the backend. 

import { API_BASE, API_PROFILE } from "./ApiEndpoints";

// HTTP methods
const HTTP_METHODS = {
    PUT: "PUT",
  };

// Content types
const CONTENT_TYPES = {
    JSON: "application/json",
};

// API config
const API_CONFIG = {
    method: HTTP_METHODS.PUT,
    headers: {
        "Content-Type": CONTENT_TYPES.JSON,
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
};

// Update venue manager status
export const updateVenueManagerStatus = async function() {

    const url = `${API_BASE}${API_PROFILE}${localStorage.getItem("name")}`;
    const requestBody = JSON.stringify({ venueManager: true });

    const config = {
        ...API_CONFIG,
        body: requestBody,
    };

    try {
        const response = await fetch(url, config);

        if (!response.ok) {
            throw new Error("Failed to update as venue manager");
        }
        return true;
    } catch (error) {
        console.error(error);
        throw error;
    }
}