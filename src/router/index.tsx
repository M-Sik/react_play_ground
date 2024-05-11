import { useRoutes } from "react-router-dom";
import { lazy } from "react";

const MainPage = lazy(() => import("../pages/MainPage"));
const ModalTestPage = lazy(() => import("../pages/ModalTestPage"));

function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/modal",
      element: <ModalTestPage />,
    },
  ]);
  return routes;
}

export default Router;
