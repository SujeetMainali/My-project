import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

function NavBar() {
  const navLinks = [
    {name: 'Home', path: '/'},
    {name: 'Login', path: '/login'},
    {name: 'Signup', path: '/signup'}
    // {name: 'home', path: '/'}
  ]
  return (
    <NavigationContainer>
      <div className="container">
        <div className="right">
          image
        </div>
        <div className="left">
          <ul className="links">
            {navLinks.map(({ name, path }) => {
              return (
                <li key={name}>
                  <Link to={path} className='link'>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </NavigationContainer>
  );
}

const NavigationContainer = styled.div`
/* display: flex; */
.container{
  border: 2px solid black;
  background-color: aliceblue;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
 .right{
margin-left: 5rem;
 }
 .left{
margin-right: 5rem;
 .links{
  display: flex;
  list-style: none;
  gap: 2rem;
  
 }
 .link{
  font-size: 14px;
  color: black;
  text-decoration: none;
  cursor: default;
 }
 }
}

  
`

export default NavBar