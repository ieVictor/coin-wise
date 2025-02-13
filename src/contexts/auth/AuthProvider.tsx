import React, { useEffect, useState } from 'react';
import { LoginResponse, User } from '@Types/User';
import { AuthContext } from './AuthContext';
import { apiUrl, headers } from 'src/config/API';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState<boolean>(true);
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>({
    id: '',
    email: '',
    name: '',
    createdAt: new Date(),
  });

  const login = async (
    email: string,
    password: string
  ): Promise<LoginResponse> => {
    try {
      const rawResponse = await fetch(apiUrl.LOGIN, {
        method: 'POST',
        credentials: 'include',
        headers: { ...headers },
        body: JSON.stringify({ email: email, password: password }),
      });
      const data: LoginResponse = await rawResponse.json();
      if (data.success && data.user && data.accessToken) {
        setToken(data.accessToken);
        setUser(data.user);
      }
      return data;
    } catch (error) {
      return {
        success: false,
        message: 'Error: ' + error,
        code: 'UNKNOWN_ERROR',
        errors: { email: null, password: null },
      };
    }
  };

  const refreshToken = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${apiUrl.REFRESH_TOKEN}`, {
        method: 'POST',
        credentials: 'include',
        headers,
      });

      const data = await response.json();
      if (data.success) {
        setToken(data.accessToken);
        setUser(data.user);
        setLoading(false);
      } else {
        setToken(null);
        setUser(null);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error('Token expired & could not be refreshed!', error);
    }
  };

  const logout = async () => {
    try {
      const rawResponse = await fetch(apiUrl.LOGOUT, {
        method: 'POST',
        credentials: 'include',
        headers: { ...headers },
        body: JSON.stringify({ user: user }),
      });
      if (rawResponse.status) {
        setUser(null);
        setToken(null);
      }
    } catch (error) {
      return { error };
    }
  };

  useEffect(() => {
    refreshToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        logout,
        accessToken: token,
        setUser,
        login,
        isLoading: loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
