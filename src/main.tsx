import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Root from "./routes/root"
import "./index.css"
import DaisyRoute from "./routes/demo-daisy"
import RadixRoute from "./routes/demo-radix"
import DemoRoute from "./routes/demo"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/demo",
    element: <DemoRoute />,
    children: [
      {
        path: "daisy",
        element: <DaisyRoute />,
      },
      { path: "radix", element: <RadixRoute /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
