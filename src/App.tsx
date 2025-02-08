import { FavoritesProvider } from '@Contexts/FavoritesProvider';
import Router from './routes';
import Login from '@Pages/Login';
import useAuth from '@Services/useAuth';
import { CircularProgress } from '@mui/material';

function App() {
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
  if (!accessToken || !user) return <Login />;

  return (
    <>
      <FavoritesProvider>
        <Router />
      </FavoritesProvider>
    </>
  );
}

export default App;
