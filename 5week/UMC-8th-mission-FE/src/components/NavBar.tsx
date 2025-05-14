import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#f0f0f0' }}>
      <Link to="/">Homepage</Link>
      <Link to="/signup">SignupPage</Link>
      <Link to="/login">LoginPage</Link>
      <Link to="/my">Mypage</Link>
    </nav>
  );
};

export default NavBar; 