import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import {
  createHashRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ParticlesA from "./routes/particle/particle-a";
import ParticlesB from "./routes/particle/particle-b";
import ParticlesC from "./routes/particle/particle-c";
import Redirect from "./routes/redirect";

export const routeObjects: Record<string, RouteObject> = {
  "particle type A": {
    path: "/particle/a",
    element: <ParticlesA />,
  },
  "particle type B": {
    path: "/particle/b",
    element: <ParticlesB />,
  },
  "particle type C": {
    path: "/particle/c",
    element: <ParticlesC />,
  },
};

const router = createHashRouter(
  Object.values(routeObjects).concat([
    { path: "/", element: <Redirect path="/particle" /> },
    { path: "/particle", element: <Redirect path="/particle/a" /> },
  ])
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />{" "}
    </RecoilRoot>
  </React.StrictMode>
);
