import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ParticlesA from "./routes/particle-a";
import ParticlesB from "./routes/particle-b";
import ParticlesC from "./routes/particle-c";

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

const router = createBrowserRouter(Object.values(routeObjects));

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />{" "}
    </RecoilRoot>
  </React.StrictMode>
);
