import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Importando Link do React Router
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';
import '../styles/CreateAccount.css';  // Importando o CSS específico para o componente
import loginImagem from '../assets/login_tcc.png'

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validar o e-mail sempre que ele mudar
    if (!validateEmail(email) && email !== '') {
      setEmailError('E-mail inválido.');
    } else {
      setEmailError('');
    }
  };

  const validateEmail = (email) => {
    // Expressão regular simples para validar e-mails
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  return (
    <main>
      <section className='container'>
        <div className='back'>
          <Link to="/login"><FontAwesomeIcon icon={faReply} /></Link>
        </div>
        <div className="login-container-image">
          <h1>CreateAccount</h1>
          <img src={loginImagem} alt='Imagem de Login'></img>
        </div>
        <div className="login-container-form">
          <h1>Recover Password</h1>
          <form onSubmit={handleSubmit}>
            <div className='form-input'>
              <label htmlFor="email">E-mail {emailError && <span style={{ color: 'red', fontSize: '12px' }}>{emailError}</span>} {/* Exibe a mensagem de erro */}</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu e-mail"
              />
            </div>
            <div>
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default ForgotPassword;