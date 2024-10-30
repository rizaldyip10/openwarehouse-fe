export interface AuthSlice {
  isAuthenticated: boolean;
  email: string | null;
  fullname: string | null;
  username: string | null;
  isLoading: boolean;
  role: string | null;
  pin: string | null;
  setIsLoading: (loading: boolean) => void;
  login: (email: string, fullname: string, role: string, pin?: string) => void;
  logout: () => void;
}

export type StoreState = AuthSlice;
