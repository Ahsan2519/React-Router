import { useState, useEffect } from "react";

const useFetch = (initialVal, url) => {
  const [value, setValue] = useState(initialVal);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (response.status === 200) {
        const data = await response.json();
        setValue(data);
      } else {
        throw new Error(`Sorry, ${response.status} bad request`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { value };
};

export default useFetch;
