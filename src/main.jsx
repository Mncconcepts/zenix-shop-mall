import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';



// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';

import {
  createHashRouter,
  HashRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Home/Home.jsx";
import Shop from './shop/Shop.jsx';
import About from './about/About.jsx';
import Contact from './contactPage/Contact.jsx';
import SingleProduct from './shop/SingleProduct.jsx';
import CartPage from './shop/CartPage.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';



const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/shop",
        element: <Shop />
      },
      {
        path: "/shop/:id",
        element: <SingleProduct />
      },
      {
        path: "/cart-page",
        element: <CartPage />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
    ],
  },

  {
    path: "login",
    element: <Login />
  },

  {
    path: "sign-up",
    element: <Signup/>
  }
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />
 
);