import { Link } from "react-router-dom";
import "../css/Errorpage.css";
import styled from 'styled-components'

function ErrorPage() {
  return (
    <>
      <div className="container">
        <h3 className="center">404 Error</h3>
        <p className="center">Page not Found</p>
        <p className="center">
          Get back to <StyledLink to="/">Home Page</StyledLink>
        </p>
      </div>
    </>
  );
}

const StyledLink = styled(Link)`
  color: red;
  text-decoration: none;
  margin: 1rem;
  position: relative;
  font-weight: bold;
  cursor: default;
`;

export default ErrorPage;
