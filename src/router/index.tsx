import { useRoutes } from "react-router-dom";
import { lazy } from "react";

const MainPage = lazy(() => import("../pages/MainPage"));

function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <MainPage />,
    },
  ]);
  return routes;
}

export default Router;
