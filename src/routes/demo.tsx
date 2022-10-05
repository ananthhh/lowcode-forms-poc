import reactLogo from "../assets/react.svg"
import { Link, Outlet } from "react-router-dom"

function DemoRoute() {
  return (
    <div className="h-screen bg-base-300 px-6 pt-2">
      <div className="navbar rounded-box bg-base-100">
        <Link to="/" className="flex-1">
          <img src="/vite.svg" alt="Vite logo" />
          <img src={reactLogo} alt="React logo" />
          <h1 className="mx-2">Vite + React + TailwindCSS + DaisyUI</h1>
        </Link>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="daisy">Daisy</Link>
            </li>
            <li>
              <Link to="radix">Radix</Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default DemoRoute
