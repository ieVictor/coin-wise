import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '@Pages/Home';
import CoinPrice from '@Pages/CoinPrice';
import SearchPage from '@Pages/SearchPage';
import Error404Page from '@Pages/error404';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />,
      errorElement: <Error404Page />,
    },
    {
      path: '/coin/:id',
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

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
