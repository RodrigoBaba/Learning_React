import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Importando Link do React Router
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';
import '../styles/CreateAccount.css';  // Importando o CSS específico para o componente
import loginImagem from '../assets/login_tcc.png'

function CreateAccount() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validar o e-mail sempre que ele mudar
    if (!validateEmail(email) && email !== '') {
      setEmailError('E-mail inválido.');
      setError('');
      setSuccessMessage('');
    }else{
      setEmailError('');
    }

    if (password === '' || confirmPassword === '') {
      setError('Por favor, preencha todos os campos.');
      setSuccessMessage('');
    } else {
      if(password != confirmPassword){
        setError('Senhas diferentes!');
        setSuccessMessage('');
      }
      else{
        if(setEmailError === ''){
          setSuccessMessage('Criado com Sucesso!');
          setError('');
        }        
      }
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
          <h1>Create Account</h1>
          {(error || successMessage) && (
            <p style={{ color: error ? 'red' : 'green' }}>
              {error ? error : successMessage}
            </p>)}
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
            <div className='form-input'>
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
              />
            </div>
            <div className='form-input'>
              <label htmlFor="confirmPassword">Confirmar</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirme sua senha"
              />
            </div>
            {/* <div className='form-links'>
                
              <Link to="/forgot-password">Esqueci a senha</Link>  
            </div>             */}
            <div>
              <button type="submit">Criar</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default CreateAccount;