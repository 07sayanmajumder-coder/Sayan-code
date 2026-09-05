import { useState } from 'react';
import Login from './src/pages/Login.jsx';
import Register from './src/pages/Register.jsx';
import Profile from './src/pages/Profile.jsx';
import ProtectedRoute from './src/components/ProtectedRoute.jsx';
import { getCurrentUser, logoutUser } from './src/services/authApi.js';

function App() {
  const [page, setPage] = useState('login');
  const [user, setUser] = useState(getCurrentUser());

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
    setPage('profile');
  };

  const handleRegister = (registeredUser) => {
    setUser(registeredUser);
    setPage('profile');
  };

  const handleLogout = () => {
    logoutUser();
    setUser(null);
    setPage('login');
  };

  return (
    <main style={styles.app}>
      <nav style={styles.nav}>
        <h2>AuthApp</h2>

        {user ? (
          <button style={styles.navButton} onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <div>
            <button style={styles.navButton} onClick={() => setPage('login')}>
              Login
            </button>
            <button style={styles.navButton} onClick={() => setPage('register')}>
              Register
            </button>
          </div>
        )}
      </nav>

      <section style={styles.content}>
        {page === 'login' && (
          <Login
            onLogin={handleLogin}
            onRegisterClick={() => setPage('register')}
          />
        )}

        {page === 'register' && (
          <Register
            onRegister={handleRegister}
            onLoginClick={() => setPage('login')}
          />
        )}

        {page === 'profile' && (
          <ProtectedRoute user={user} onLogin={() => setPage('login')}>
            <Profile user={user} onLogout={handleLogout} />
          </ProtectedRoute>
        )}
      </section>
    </main>
  );
}

const styles = {
  app: {
    minHeight: '100vh',
    background: '#f4f7fb',
    color: '#172033',
    fontFamily: 'Arial, sans-serif',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '18px 8%',
    background: '#243b7a',
    color: '#fff',
  },
  navButton: {
    marginLeft: '8px',
    padding: '9px 14px',
    border: '1px solid #fff',
    borderRadius: '6px',
    background: 'transparent',
    color: '#fff',
    cursor: 'pointer',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    padding: '50px 20px',
  },
};

export default App;