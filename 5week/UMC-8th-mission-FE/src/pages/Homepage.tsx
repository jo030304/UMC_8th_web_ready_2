import { Link } from 'react-router-dom';


const Homepage = () => {
    return (
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', gap: '2rem' }}>
            <h1 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '0.5rem' }}>Welcome to 토토로 UMC Mission!</h1>
            <p style={{ fontSize: '1.2rem', color: '#666', textAlign: 'center', maxWidth: 500 }}>
                This page is for the mission of TOTORO.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
                <Link to="/signup" style={{ padding: '0.7rem 1.5rem', background: '#4f8cff', color: '#fff', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>회원가입</Link>
                <Link to="/login" style={{ padding: '0.7rem 1.5rem', background: '#4f8cff', color: '#fff', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>로그인</Link>
                <Link to="/my" style={{ padding: '0.7rem 1.5rem', background: '#6fcf97', color: '#fff', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>마이페이지</Link>
            </div>
        </div>
    );
};

export default Homepage;