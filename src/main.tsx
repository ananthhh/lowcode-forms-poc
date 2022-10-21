import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Root from "./routes/root"
import "./index.css"
import DaisyRoute from "./routes/demo-daisy"
import RadixRoute from "./routes/demo-radix"
import DemoRoute from "./routes/demo"
import FormsRoute from "./routes/forms"
import FormsViewRoute from "./routes/forms-view"
import FormsXstateRoute from "./routes/forms-xstate"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/forms",
    element: <FormsRoute />,
  },
  {
    path: "/forms/:id",
    element: <FormsViewRoute />,
  },
  {
    path: "/forms/xstate",
    element: <FormsXstateRoute />,
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
