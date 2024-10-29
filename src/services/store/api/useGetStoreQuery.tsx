import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@/config/AxiosInstance';
import axios from 'axios';

export const useGetStoreQuery = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['store'],
    queryFn: async () => {
      return axiosInstance.get('/store');
    },
  });

  return {
    data,
    isLoading,
    refetch,
  };
};
