import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Seat from "./Seat";

function Router() {
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
      path: "/seat/:seatId",
      element: <Seat />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
