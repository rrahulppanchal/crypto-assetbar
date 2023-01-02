import React from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import SinglePage from "./pages/blog/single-page/SinglePage";
import SingleFunding from "./pages/funding/single-funding/SingleFunding";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Explore from "./pages/explore-funds/Explore";
import RaiseFunds from "./pages/raisefund/RaiseFunds";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/single-blog",
    element: <SinglePage />,
  },
  {
    path: "/single-funding",
    element: <SingleFunding />,
  },
  {
    path: "/explore",
    element: <Explore />,
  },

  {
    path: "/raisefunds",
    element: <RaiseFunds />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
