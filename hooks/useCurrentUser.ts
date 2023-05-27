import useSWR from "swr";
import fetcher from "@/libs/fetcher";

const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/current", fetcher); // we created in this pages API current
  // swr is going to fetch this /api/current using the axios fetcher which we create at the fetcher compononet
  // and its going to store it in global store so we are going to be able to reuse this use current user hook and its not going to
  // refetch it every time we use it , its actually going to take look and see if data already exists and its also gonna decide whether data Maybe needs to be
  // re-invalidated and fetched again so bascically this is going to replace our global state like redux so this is an perfect library 

  return {
    data,
    error,
    isLoading,
    mutate
  }
};

export default useCurrentUser;