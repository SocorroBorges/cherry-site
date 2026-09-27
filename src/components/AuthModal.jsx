import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../context/AuthContext';
import './AuthModal.css';

function AuthModal() {
  const { isAuthModalOpen, setAuthModalOpen, login } = useAuth();
  const [isRegister, setIsRegister] = useState(false);

  if (!isAuthModalOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    login({ name: 'Cliente Cherry', photo: null }); // depois conectamos no backend
  };

  const handleRegister = (e) => {
    e.preventDefault();
    login({ name: 'Novo Cliente', photo: null });
  };

  return (
    <div className="modal-backdrop" onClick={() => setAuthModalOpen(false)}>
      <div
        className={`auth-container ${isRegister ? 'active' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="form-box login-box">
          <form onSubmit={handleLogin}>
            <h1>Entrar</h1>
            <div className="input-group">
              <FontAwesomeIcon icon={faEnvelope} />
              <input type="email" placeholder="E-mail" required />
            </div>
            <div className="input-group">
              <FontAwesomeIcon icon={faLock} />
              <input type="password" placeholder="Senha" required />
            </div>
            <a href="#" className="forgot-link">Esqueceu a senha?</a>
            <button type="submit" className="submit-btn">Entrar</button>
          </form>
        </div>

        <div className="form-box register-box">
          <form onSubmit={handleRegister}>
            <h1>Criar conta</h1>
            <div className="input-group">
              <FontAwesomeIcon icon={faUser} />
              <input type="text" placeholder="Nome completo" required />
            </div>
            <div className="input-group">
              <FontAwesomeIcon icon={faEnvelope} />
              <input type="email" placeholder="E-mail" required />
            </div>
            <div className="input-group">
              <FontAwesomeIcon icon={faLock} />
              <input type="password" placeholder="Senha" required />
            </div>
            <button type="submit" className="submit-btn">Cadastrar</button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Já tem conta?</h1>
              <p>Entre com seus dados para acompanhar seus pedidos</p>
              <button className="ghost-btn" onClick={() => setIsRegister(false)}>Entrar</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Novo por aqui?</h1>
              <p>Crie sua conta e acompanhe seus pedidos de calendários e roupas</p>
              <button className="ghost-btn" onClick={() => setIsRegister(true)}>Cadastrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthModal;