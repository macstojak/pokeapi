import { useCallback, useEffect, useState } from "react";

function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>();
  const [loading, setLoading] = useState<boolean>(false);

  const getData = useCallback(async () => {
    setLoading(true);
    const res = await fetch(url);
    const json = await res.json();
    setData(json);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { data, loading };
};
export default useFetch;