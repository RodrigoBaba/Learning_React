import React, { useState } from 'react';
import '../styles/MenuUser.css';  // Importando o CSS específico para o componente
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function MenuUser() {
    // Usando o estado para alternar a visibilidade do menu
    const [isMenuUserOpen, setIsMenuUserOpen] = useState(false);
    const [isContainerMenuUserOpen, setIsContainerMenuUserOpen] = useState(false);

    // Função para alternar o estado do menu
    const toggleMenu = () => {
        setIsMenuUserOpen(!isMenuUserOpen);
        setIsContainerMenuUserOpen(!isContainerMenuUserOpen);
    };

    return (
        <div className='container-user'>
            <div className={`container-menu-user ${isContainerMenuUserOpen ? 'active' : ''}`}>
                <div>
                    <FontAwesomeIcon icon={faUser} className='menu-user' onClick={toggleMenu} />
                </div>
                <div className={`menu-user-links ${isMenuUserOpen ? 'active' : ''}`}>
                    <div>
                        <ul >
                            <li>Redefinir senha</li>
                            <li>Notificações</li>
                        </ul>
                    </div>
                    <button>Sair</button>
                </div>
            </div>
        </div>
    );
}

export default MenuUser;