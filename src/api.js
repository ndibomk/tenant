export const url = "http://localhost:5000/stats";

export const setHeaders = () => {
  const headers = {
    headers: {
      "x-auth-token": localStorage.getItem("profile"),
    },
  };

  return headers;
};