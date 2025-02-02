import { AuthContext } from '@Contexts/auth/AuthContext';
import { useContext } from 'react';

export default function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used inside a AuthProvider!');
  return context;
}
