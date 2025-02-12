import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';
import { AuthProvider } from '@Contexts/auth/AuthProvider.tsx';
import { RouterProvider } from 'react-router-dom';
import router from '@Routes/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
