import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutUs from "./components/about-us.jsx";


const routes = createBrowserRouter([
  {
    path:"/",
    element:<App />,
  },
  {
    path:"/about-us",
    element:<AboutUs />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
