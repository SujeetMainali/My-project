import { Link } from "react-router-dom";


function ErrorPage() {
  return (
    <>
      <h3>404 Error</h3>
      <p>Page not Found</p>
      <p>Get back to <Link to='/'>Home Page</Link></p>
    </>
  );
}

export default ErrorPage