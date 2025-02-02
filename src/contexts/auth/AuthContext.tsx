import React from 'react';
import { createContext } from 'react';
import { LoginResponse, User } from '@Types/User';

export type AuthContextProps = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  login: (email: string, password: string) => LoginResponse;
};

export const AuthContext = createContext<AuthContextProps | null>(null);
