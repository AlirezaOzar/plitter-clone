import useSWR from "swr";
import fetcher from "@/libs/fetcher";

const useUsers = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/users", fetcher); // we created in this pages API current

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useUsers;
