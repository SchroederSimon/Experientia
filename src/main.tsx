import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Pages 
import ErrorPage from "./error-page";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import News from './pages/News/News';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Home />
            <About />
            <News />
          </>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "user/profile",
        element: <Profile />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
