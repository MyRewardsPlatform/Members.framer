export interface User {
  id: string;
  email: string;
  user_metadata: {
    name: string;
    avatar_url: string;
    role: 'admin' | 'member';
  };
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
}