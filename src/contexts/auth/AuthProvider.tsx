import React, { useState } from 'react';
import { LoginResponse, User } from '@Types/User';
import { AuthContext } from './AuthContext';
import { isEmailValid } from './validator';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>({
    email: null,
    name: null,
    token: null,
  });

  const login = (email: string, password: string): LoginResponse => {
    if (!isEmailValid(email))
      return { status: 'error', msg: 'Email inválido!', field: 'email' };
    if (!password)
      return {
        status: 'error',
        msg: 'Por favor adicione uma senha!',
        field: 'password',
      };

    try {
      return {
        status: 'success',
        msg: 'Login realizado com sucesso!',
        field: null,
      };
    } catch (error) {
      return { status: 'error', msg: 'Error: ' + error, field: null };
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login }}>
      {children}
    </AuthContext.Provider>
  );
}
