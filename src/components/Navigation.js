import React, { useState } from 'react';
import '../styles/Navigation.css';  // Importando o CSS específico para o componente
import MenuUser from '../components/MenuUser';
import { Link } from 'react-router-dom';

function Navigation() {
    // Usando o estado para alternar a visibilidade do menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isContainerMenuOpen, setIsContainerMenuOpen] = useState(false);

    // Função para alternar o estado do menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsContainerMenuOpen(!isContainerMenuOpen);
    };

    return (
        <nav >
            <div className={`container-menu ${isContainerMenuOpen ? 'active' : ''}`}>
                <div className='menu-toggle' onClick={toggleMenu}>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </div>
                <ul className={`menu-links ${isMenuOpen ? 'active' : ''}`}>
                    <li><Link to='/registerComponent'>Cadastrar</Link></li>
                    <li><Link to='/reserveComponent'>Reservar</Link></li>
                    <li>Renovar</li>
                    <li>Pendências</li>
                    <li>Histórico</li>
                    <li><Link to='/rooms'>Salas</Link></li>
                    <li>Desenvolvedores</li>
                </ul>
            </div>
            <div>
                <MenuUser className='menu-user'/>
            </div>            
        </nav>
    );
}

export default Navigation;