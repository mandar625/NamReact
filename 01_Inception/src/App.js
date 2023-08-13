import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter , RouterProvider ,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";
import userContext from "./utils/userContext";
// import 'antd/dist/antd.css';
import 'antd/dist/reset.css';
// import "App.css";

// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"))
const About = lazy(() => import("./components/About"))

const AppLayout = () => {

  // suppose auth logic is here...
  const [userName, setuserName]  = useState();

  useEffect(()=>{
    // api call
    let data = {
      name :"Mandar Marathe"
    }
    setuserName(data.name)
  },[])
  return (
    <userContext.Provider value={{loggedInuser:userName , setuserName}} >
    <div className="app">
      <Header />
      {/* childred routing.... */}
      <Outlet />
    </div>
    </userContext.Provider>
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
        element: <Suspense fallback={<h1>Lodaing pls WAIT................</h1>} ><About /></Suspense> ,
      },
      {
        path:"/Contact",
        element: <Contact />,
      },
      {
        path:"/Grocery",
        element:   <Suspense fallback={<h1>Lodaing pls WAIT................</h1>} ><Grocery /></Suspense> ,
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
