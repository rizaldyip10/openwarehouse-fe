export interface AuthSlice {
  isAuthenticated: boolean;
  email: string | null;
  fullname: string | null;
  username: string | null;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  login: (email: string, fullname: string) => void;
  logout: () => void;
}

export type StoreState = AuthSlice;
