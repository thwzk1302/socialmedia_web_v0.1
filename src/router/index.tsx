
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';

const routes = [
  {
    path: '/',
    element: <Login />,
   
     
  }, {
    path: '/home',
    element: <Home/>,
   
     
  },
];

function wrapRoutesWithRoles(routes: any[]) {
  return routes.map((route) => {
  
    return route;
  });
}
export const router = createBrowserRouter(wrapRoutesWithRoles(routes));
