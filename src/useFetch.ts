import { useEffect, useState } from "react";

const useFetch = (initalType: string) => {
  const [value, setvalue] = useState();

  useEffect(() => {
    fetchUrl(initalType)
  }, []);

  const fetchUrl = (type:string) => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setvalue(json));
  };

  return {
    value,
    fetchUrl
  };
};

export default useFetch;
