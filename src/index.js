import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Attorneys from './pages/Attorneys';
import Practices from './pages/Practices';
import Services from './pages/Services';

const router=createBrowserRouter([
    {
      path:'/',
      element:<App/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/attorneys",
          element:<Attorneys/>
        },
        {
          path:"/practices",
          element:<Practices/>
        },
        {
          path:"/services",
          element:<Services/>
        }
      ]
    }
])
const root = ReactDOM.createRoot(
 
  document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
