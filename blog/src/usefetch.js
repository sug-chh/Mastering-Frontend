import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return response.json();
      })
      .then((data) => {
        setBlogs(data);
        setIsPending(false);
        setError(null);
      })
      .catch((e) => {
        setIsPending(false);
        setError(e.message);
      });
  }, [url]);
  return {
    blogs,
    isPending,
    error,
  };
};
export default useFetch;
