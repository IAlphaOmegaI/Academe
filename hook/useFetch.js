import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": "d9ee91d2camsh25fc00f6aa9b81fp1e7567jsnb1c6ffa7f338",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };
  // const options = {
  //   method: "GET",
  //   url: "https://jsearch.p.rapidapi.com/search",
  //   params: {
  //     query: "Python developer in Texas, USA",
  //     page: "1",
  //     num_pages: "1",
  //   },
  //   headers: {
  //     "X-RapidAPI-Key": "d9ee91d2camsh25fc00f6aa9b81fp1e7567jsnb1c6ffa7f338",
  //     "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  //   },
  // };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      // console.warn(response);
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
