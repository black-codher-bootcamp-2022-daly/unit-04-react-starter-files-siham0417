import { Link } from "react-router-dom";

export const Nav = (props) => {

  return <>
  <h1 style={{ backgroundcolor: "pink"}}>Seham's BookCase</h1>
    
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/search" className="Booklink">Search {props.Book}</Link>
      </div>
      <div>
      <Link to="/search">About</Link>
      </div>
    </>
}