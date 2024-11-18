import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '@Pages/Home';
import CoinPrice from '@Pages/CoinPrice';
import SearchPage from '@Pages/SearchPage';
import Error404Page from '@Pages/error404';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error404Page />,
    children: [
      {
        path: 'coin/:id',
        element: <CoinPrice />,
      },
      {
        path: 'search',
        element: <SearchPage />,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
