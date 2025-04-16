import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Importando Link do React Router
import '../styles/Login.css';  // Importando o CSS específico para o componente
import loginImagem from '../assets/login_tcc.png'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === '' || password === '') {
      setError('Por favor, preencha todos os campos.');
    } else {
      console.log('Login realizado com sucesso');
    }
  };

  return (
    <main>
      <section className='container'>
        <div className="login-container-image">
          <h1>Bem vindo</h1>
          <img src={loginImagem} alt='Imagem de Login'></img>
        </div>
        <div className="login-container-form">
          <h1>Login</h1>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className='form-input'>
              <label htmlFor="username">Usuário</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className='form-input'>
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='form-links'>
              <Link to="/create-account">Criar conta</Link>  {/* Usando Link para navegação */}
              <Link to="/forgot-password">Esqueci a senha</Link>  {/* Usando Link para navegação */}
            </div>            
            <div>
              <button type="submit">Entrar</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Login;