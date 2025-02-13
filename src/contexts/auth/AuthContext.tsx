import React from 'react';
import { createContext } from 'react';
import { LoginResponse, User } from '@Types/User';

export type AuthContextProps = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  accessToken: string | null;
  login: (email: string, password: string) => Promise<LoginResponse>;
  logout: () => Promise<unknown>;
  isLoading: boolean;
};

export const AuthContext = createContext<AuthContextProps | null>(null);
