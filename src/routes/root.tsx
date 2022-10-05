import { Link } from "react-router-dom"

function Root() {
  return (
    <Link to="/demo">
      <button className="btn btn-primary m-2">Demo</button>
    </Link>
  )
}

export default Root
