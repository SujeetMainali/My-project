import { Link } from "react-router-dom";
import '../css/Errorpage.css'

function ErrorPage() {
  return (
    <>
      <div className="container">
        <h3>404 Error</h3>
        <p>Page not Found</p>
        <p>
          Get back to <Link to="/">Home Page</Link>
        </p>
      </div>
    </>
  );
}

export default ErrorPage;
