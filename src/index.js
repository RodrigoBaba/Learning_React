// import React from 'react';
// import ReactDOM from 'react-dom';
// import './styles/global.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';  // Correto


// // Função de callback para tratar as métricas de desempenho
// const logVitals = (metric) => {
//   console.log(metric); // Você pode enviar essas métricas para um serviço de monitoramento
// };

// // A partir do React 18, usamos createRoot
// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // Chama a função reportWebVitals e passa a função logVitals para tratar as métricas
// reportWebVitals(logVitals);
import React from 'react';
import ReactDOM from 'react-dom/client';  // CORREÇÃO: 'react-dom/client'
import './styles/global.css';  // Arquivo CSS global
import App from './App';       // Componente principal

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// comando para rodar o sistema
// npm start