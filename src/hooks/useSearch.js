import { useState, useEffect } from "react";

const useSearch = (query) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://startup-summer-2023-proxy.onrender.com/2.0/vacancies/?published=1&keyword=${query}`,
      {
        headers: {
          "x-secret-key": "GEU4nvd3rej*jeh.eqp",
          "X-Api-App-Id":
            "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
        },
      }
    )
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoading(false);
          setData(data);
        },
        (error) => {
          setIsLoading(false);
          setError(error);
        }
      );
  }, [query]);

  return { error, data, isLoading };
};

export default useSearch;
