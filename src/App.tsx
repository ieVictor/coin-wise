import Navbar from '@Components/Navbar';
import { FavoritesProvider } from '@Contexts/FavoritesProvider';
import useAuth from '@Services/useAuth';
import { CircularProgress } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const { accessToken, isLoading, user } = useAuth();
  if (isLoading)
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CircularProgress />
        <h1 style={{ fontSize: 32, color: '#1459f1' }}>CoinWise.</h1>
      </div>
    );

  if (!accessToken || !user) navigate('/login');

  return (
    accessToken &&
    user && (
      <FavoritesProvider>
        <Navbar />
        <Outlet />
      </FavoritesProvider>
    )
  );
}

export default App;
