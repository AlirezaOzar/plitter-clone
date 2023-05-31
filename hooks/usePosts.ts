import useSWR from "swr";
import fetcher from "@/libs/fetcher";

const usePosts = (userId?: string) => {
  const url = userId ? `/api/posts?userId=${userId}` : `/api/posts`;
  const { data, error, isLoading, mutate } = useSWR(url, fetcher); // we created in this pages API current

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default usePosts;