import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter , RouterProvider ,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* childred routing.... */}
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout />,
    children:[
      {
        path:"/",
        element: <Body />,
      },
      {
        path:"/About",
        element: <About />,
      },
      {
        path:"/Contact",
        element: <Contact />,
      },
      {
        path:"/restaurant/:resID",
        element: <RestaurantMenu />,
      }
    ],
    errorElement:<ErrorPage/>
  },
 
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(  <RouterProvider router={router} />);
