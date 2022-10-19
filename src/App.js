import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import CheckOut from './components/CheckOut/CheckOut';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Shop from './components/Shop/Shop';
import Signup from './components/Signup/Signup';
import Main from './layout/Main';
import { productsAndCartLoader } from './loaders/productsAndCartLoader';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => productsAndCartLoader(),
          element: <Shop></Shop>
        },
        {
          path: '/orders',
          loader: () => productsAndCartLoader(),
          element: <Orders></Orders>
        },
        {
          path: '/checkout',
          element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
        },
        {
          path: '/inventory',
          element: <PrivateRoute><Inventory></Inventory></PrivateRoute>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        },
        {
          path: '/*',
          element: <PageNotFound></PageNotFound>
        }
      ]
    }
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
