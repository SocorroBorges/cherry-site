import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faUser} from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import './Header.css';
import logoCherry from '../assets/logo-cherry.png';

function Header() {
  const { isDark, toggleTheme } = useTheme();
  const { user, setAuthModalOpen } = useAuth();

  return (
    <header className="header">
      <Link to="/">
        <img src={logoCherry} alt="Cherry" className="logo" />
      </Link>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/catalogo">Catálogo</Link>

        <button className="theme-toggle" onClick={toggleTheme} aria-label="Alternar tema">
          <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
        </button>

        {user ? (
          user.photo ? (
            <img src={user.photo} alt={user.name} className="user-avatar" />
          ) : (
            <div className="user-avatar user-avatar-placeholder">
              <FontAwesomeIcon icon={faUser} />
            </div>
          )
        ) : (
          <button className="login-btn" onClick={() => setAuthModalOpen(true)}>
            Entrar
          </button>
        )}
      </nav>
    </header>
  );
}

export default Header;