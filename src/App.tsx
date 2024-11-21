import { FavoritesProvider } from '@Contexts/FavoritesProvider';
import Router from './routes';

function App() {
  return (
    <>
      <FavoritesProvider>
        <Router />
      </FavoritesProvider>
    </>
  );
}

export default App;
