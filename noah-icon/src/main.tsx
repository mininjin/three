import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ParticlesA from "./routes/particle-a";
import ParticlesB from "./routes/particle-b";

const router = createBrowserRouter([
  {
    path: "/particle/a",
    element: <ParticlesA />,
  },
  {
    path: "/particle/b",
    element: <ParticlesB />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />{" "}
    </RecoilRoot>
  </React.StrictMode>
);
