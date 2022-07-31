import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/'>Home</Link>
      <Link to='/astar'>About</Link>
      <Link to='/shiden'>Products</Link>
    </nav>
  );
};
export default Navbar;
