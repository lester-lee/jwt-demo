import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <h1>{"Stranger's Things"}</h1>
      <menu>
        <li>
          <NavLink to="/posts">Posts</NavLink>
        </li>
        <li>
          <NavLink to="/login">Log In</NavLink>
        </li>
      </menu>
    </nav>
  );
}
