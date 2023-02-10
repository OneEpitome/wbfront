import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateReview from "./CreateReview";
import Home from "./Home";
import Login from "./Login";
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
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/create/review",
      element: <CreateReview />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
