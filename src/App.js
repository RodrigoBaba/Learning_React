import React from 'react';
import './styles/App.css';  // Arquivo CSS específico para o App
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Login from './components/Login';  // Componente de Login
import CreateAccount from './components/CreateAccount';  // Componente de CreateAccount
import ForgotPassword from './components/ForgotPassword'; // Componente de ForgotPassword
import Navigation from './components/Navigation'; // Componente de Navigation
import Rooms from './components/Rooms'; // Componente de Rooms
import RegisterComponent from './components/RegisterComponent'; // Componente de RegisterComponent
import ReserveComponent from './components/ReserveComponent'; // Componente de ReserveComponent
import CategoryPage from './components/CategoryPage';

function App() {
  return (
    <Router> {/* Envolvendo todo o conteúdo do roteamento com o Router */}
      <div className="App">
        <Routes>
          {/* Defina outras rotas conforme necessário */}
          <Route path="/" element={<Login />} /> {/* Página inicial que redireciona para Login */}
          {/* Rota para o componente Login */}
          <Route path="/login" element={<Login />} />
          {/* Rota para criar conta */}
          <Route path="/create-account" element={<CreateAccount/>} />
          {/* Rota para recuperação de senha */}
          <Route path="/forgot-password" element={<ForgotPassword/>} />
          {/* Rota para o componente Nav */}
          {/* <Route path="/nav" element={<Navigation />} /> */}
          {/* Rota para o componente Rooms */}
          <Route path="/rooms" element={<Rooms />} />
          {/* Rota para o componente Register Component */}
          <Route path="/registerComponent" element={<RegisterComponent />} />
          {/* Rota para o componente Register Component */}
          <Route path="/reserveComponent" element={<ReserveComponent />} />
          {/* ... outras rotas */}
          <Route path="/category/:nameCategory" element={<CategoryPage />} />
        </Routes>
      </div>
    </Router> /* Certifique-se de que Router envolve as rotas */
  );
}

export default App;
