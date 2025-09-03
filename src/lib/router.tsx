import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../pages/layout/AppLayout';
import Home from '../pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [{ path: '/', element: <Home /> }],
  },
]);

export default router;
