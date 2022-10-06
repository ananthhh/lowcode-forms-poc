import { Link } from "react-router-dom"

function FormsRoute() {
  // Plan
  // 1. Put all the fields in 1 page
  // 2. Re-organisse them and move them to multiple pages
  return (
    <>
      <Link to="doc-received">
        <button className="btn btn-primary m-2">Docs Received</button>
      </Link>
      <Link to="start-case-review">
        <button className="btn btn-primary m-2">Start case review</button>
      </Link>
    </>
  )
}

export default FormsRoute
