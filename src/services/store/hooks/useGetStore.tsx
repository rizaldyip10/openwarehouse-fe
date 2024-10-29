import { useGetStoreQuery } from '../api/useGetStoreQuery';

export const useGetStore = () => {
  const {
    data: storeData,
    isLoading: storeDataLoading,
    refetch: storeDataRefetch,
  } = useGetStoreQuery();

  return {
    storeData,
    storeDataLoading,
    storeDataRefetch,
  };
};
