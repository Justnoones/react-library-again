import { useEffect, useState } from "react";

export default function useFetch (url) {
    let [data, setData] = useState(null);
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState(false);
    useEffect(() => {
        let abortController = new AbortController();
        let signal = abortController.signal;

        setLoading(true);
        fetch(url, {signal})
          .then(res => {
            if (!res.ok) {
              throw Error('Something went wrong!');
            }
            return res.json();
          })
          .then(data => {
            setError(false);
            setLoading(false);
            return setData(data);
            })
          .catch(e => {
            setError(e.message);
          })

          return () => abortController.abort();
    }, [url]);
    return { data, loading, error };
}