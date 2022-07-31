import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='navbar'>
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Home
      </NavLink>
      <NavLink
        to='/astar'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        astar
      </NavLink>
      <NavLink
        to='/shiden'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        shiden
      </NavLink>
      <NavLink
        to='/login'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Login
      </NavLink>
    </nav>
  );
};
export default Navbar;
