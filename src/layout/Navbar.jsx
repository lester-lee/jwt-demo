import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout, selectToken } from '../features/auth/authSlice';

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(selectToken);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <nav>
      <h1>{"Stranger's Things"}</h1>
      <menu>
        <li>
          <NavLink to="/posts">Posts</NavLink>
        </li>
        {token ? (
          <li>
            <a onClick={handleLogout}>Log Out</a>
          </li>
        ) : (
          <li>
            <NavLink to="/login">Log In</NavLink>
          </li>
        )}
      </menu>
    </nav>
  );
}
