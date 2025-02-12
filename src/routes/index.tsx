import { createBrowserRouter } from 'react-router-dom';
import Home from '@Pages/Home';
import CoinPrice from '@Pages/CoinPrice';
import SearchPage from '@Pages/SearchPage';
import Error404Page from '@Pages/error404';
import Login from '@Pages/Login';
import App from 'src/App';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <Error404Page />,
      children: [
        {
          path: '/',
          element: <Home />,
          errorElement: <Error404Page />,
        },
        {
          path: '/coins/:id',
          element: <CoinPrice />,
          errorElement: <Error404Page />,
        },
        {
          path: '/search',
          element: <SearchPage />,
          errorElement: <Error404Page />,
        },
        {
          path: '*',
          element: <Error404Page />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
      errorElement: <Error404Page />,
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export default router;
