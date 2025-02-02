import { FavoritesProvider } from '@Contexts/FavoritesProvider';
import Router from './routes';
import Login from '@Pages/Login';
import useAuth from '@Services/useAuth';

function App() {
  const { user } = useAuth();
  if (!user.token) return <Login />;

  return (
    <>
      <FavoritesProvider>
        <Router />
      </FavoritesProvider>
    </>
  );
}

export default App;
