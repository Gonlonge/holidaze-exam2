// This file contains all the API calls to the backend.

import { API_BASE, API_PROFILE, API_REGISTER, API_LOGIN } from "./ApiEndpoints";

// HTTP methods
const HTTP_METHODS = {
  PUT: "PUT",
  POST: "POST",
  GET: "GET",
};

// Content types
const CONTENT_TYPES = {
  JSON: "application/json",
};

// API config
function createApiConfig(httpMethod, auth = true) {
  const headers = {
    "Content-Type": CONTENT_TYPES.JSON,
  };

  if (auth) {
    headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`;
  }

  return {
    method: httpMethod,
    headers: headers,
  };
}

// Update venue manager status
export async function updateVenueManagerStatus() {
  const url = `${API_BASE}${API_PROFILE}${localStorage.getItem("name")}`;
  const requestBody = JSON.stringify({ venueManager: true });

  const config = {
    ...createApiConfig(HTTP_METHODS.PUT),
    body: requestBody,
  };

  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      return null;
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Sign up
export async function signUp(formData) {
  const url = `${API_BASE}${API_REGISTER}`;
  const requestBody = JSON.stringify(formData);

  const config = {
    ...createApiConfig(HTTP_METHODS.POST, false),
    body: requestBody,
  };

  try {
    const response = await fetch(url, config);

    if (!response.ok) {
        // Failed to sign up
        return null;
    }
    return true;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Sign in
export async function signIn(email, password) {
    const url = `${API_BASE}${API_LOGIN}`;
    const requestBody = JSON.stringify({ email, password });
    
    const config = {
        ...createApiConfig(HTTP_METHODS.POST, false),
        body: requestBody,
    };
    
    try {
        const response = await fetch(url, config);
    
        if (!response.ok) {
            // Failed to sign in
            return null;
        }

        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
        throw error;
    }
}