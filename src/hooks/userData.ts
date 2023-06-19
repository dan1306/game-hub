import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-clients";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [err, setErr] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;

        setErr(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, [endpoint]);

  return { data, err, isLoading };
};

export default useData;