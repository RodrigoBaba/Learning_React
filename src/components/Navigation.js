import React, { useState } from 'react';
import '../styles/Navigation.css';  // Importando o CSS específico para o componente
import MenuUser from '../components/MenuUser';
import { Link } from 'react-router-dom';
import { FaPlus, FaClipboardList, FaRedo, FaExclamationCircle, FaHistory, FaDoorOpen, FaUsers } from 'react-icons/fa';

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
                <ul className={`menu-links ${isMenuOpen ? '' : 'active'}`}>
                    <Link to='/registerComponent'><li ><FaPlus /></li></Link>
                    <Link to='/reserveComponent'><li ><FaClipboardList /></li></Link>
                    <Link to='/registerComponent'><li ><FaRedo /></li></Link>
                    <Link to='/registerComponent'><li ><FaExclamationCircle  /></li></Link>
                    <Link to='/registerComponent'><li ><FaHistory /></li></Link>
                    <Link to='/rooms'><li ><FaDoorOpen /></li></Link>
                    <Link to='/registerComponent'><li ><FaUsers /></li></Link>
                </ul>                
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