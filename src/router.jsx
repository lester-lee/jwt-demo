import { createBrowserRouter } from "react-router-dom";

import Root from "./layout/Root";
import Lipsum from "./features/lipsum/Lipsum";
import AuthForm from "./features/auth/AuthForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Lipsum />,
      },
      {
        path: "/login",
        element: <AuthForm />,
      },
    ],
  },
]);

export default router;
