import { useEffect, useState } from "react";

/**
 * useData hook for communicating with the backend.
 * @param {*} path Relative path from root, ie /books/getallbooks
 * @param {*} method HTTP method to use, ie GET
 * @param {*} body Body if chosen method requires it.
 * @returns The data that was requested.
 */
export const useData = (path, method = "GET", body = null) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let ignore = false;

    // Fetch data from the server
    request(path, method, body).then((json) => {
      if (!ignore) {
        setData(json);
      }
    });

    // Cleanup function
    return () => {
      ignore = true;
    };
  }, [path, method, body]);

  return data;
};



const baseUrl = "http://localhost:5000";

const request = async (path, method, body) => {
  try {
    const options = {
      method,
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    };

    // Include body only if necessary
    if (body && (method === "POST" || method === "PUT" || method === "PATCH")) {
      options.body = JSON.stringify(body);
    }

    // Perform the fetch request
    const response = await fetch(`${baseUrl}${path}`, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Artificial delay for demonstration purposes
    const data = await new Promise((resolve) =>
      setTimeout(() => resolve(response.json()), 2000)
    );

    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
};

