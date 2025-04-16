import React, { useState, useRef, useEffect } from 'react';
import '../styles/Rooms.css';
import Navigation from '../components/Navigation';
import MenuUser from '../components/MenuUser';
import Laboratorio1Imagem from '../assets/laboratorio_1.jpg'
import Laboratorio2Imagem from '../assets/laboratorio_2.jpg'
import Laboratorio3Imagem from '../assets/laboratorio_3.jpg'
import Laboratorio4Imagem from '../assets/laboratorio_4.jpg'

function Rooms() {
    // Definindo o conteúdo das modais dinamicamente
    const modais = [
        { 
            id: 1, 
            title: 'Laboratório 1', 
            content:[
                {amount: 5, description:'Item 1'}, 
                {amount: 3, description:'Item 2'}, 
                {amount: 25, description:'Item 3'}, 
                {amount: 55, description:'Item 5'}, 
                {amount: 105, description:'Item 8'}, 
            ], 
            imageUrl: Laboratorio1Imagem
        },
        { 
            id: 2, 
            title: 'Laboratório 2', 
            content:[
                {amount: 9, description:'Item 10'}, 
                {amount: 1, description:'Item 11'}, 
                {amount: 35, description:'Item 18'}, 
                {amount: 85, description:'Item 21'}, 
                {amount: 1, description:'Item 201'}, 
            ], 
            imageUrl: Laboratorio2Imagem },
        { 
            id: 3, 
            title: 'Laboratório 3', 
            content:[
                {amount: 6, description:'Item 15'}, 
                {amount: 85, description:'Item 18'}, 
                {amount: 45, description:'Item 19'}, 
                {amount: 55, description:'Item 21'}, 
                {amount: 95, description:'Item 31'}, 
            ], 
            imageUrl: Laboratorio3Imagem },
        { 
            id: 4, 
            title: 'Laboratório 4', 
            content:[
                {amount: 35, description:'Item 14'}, 
                {amount: 25, description:'Item 15'}, 
                {amount: 35, description:'Item 16'}, 
                {amount: 55, description:'Item 18'}, 
                {amount: 95, description:'Item 19'}, 
            ], 
            imageUrl: Laboratorio4Imagem 
        }
    ];

    // Estado para controlar qual modal está aberta
    const [openModalId, setOpenModalId] = useState(null);

    // Referência para a modal (para detectar clique fora)
    const modalRef = useRef(null);

    // Função para abrir a modal
    const openModal = (id) => {
        setOpenModalId(id);
    };

    // Função para fechar a modal
    const closeModal = () => {
        setOpenModalId(null);
    };

    // Função para fechar a modal ao clicar fora dela
    const handleClickOutside = (event) => {
        // Verifica se o clique foi fora da modal e fora do conteúdo da modal
        if (modalRef.current && !modalRef.current.contains(event.target) && openModalId !== null) {
            closeModal();
        }
    };

    // Adicionando o evento de clique fora da modal
    useEffect(() => {
        // Adiciona o evento de clique fora apenas se uma modal estiver aberta
        if (openModalId !== null) {
            window.addEventListener('click', handleClickOutside);
        }
        
        // Remove o evento quando a modal for fechada
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, [openModalId]); // O evento é ajustado apenas quando a modal é aberta

    return (
        <div className='container-main'>
            <Navigation />
            {/* <MenuUser/> */}
            <div className='container-content'>
                <h1>Salas</h1>
                {/* Botões dinâmicos */}
                <div className="button-container">
                    {modais.map((modal) => (
                        <button key={modal.id} onClick={(e) => {
                            e.stopPropagation();  // Impede que o clique no botão seja capturado pelo evento de clique fora
                            openModal(modal.id);
                        }}
                        style={{
                            backgroundImage: `url(${modal.imageUrl})`
                        }}
                        >
                            <h1>{modal.title}</h1>
                        </button>
                    ))}
                </div>

                {/* Modais dinâmicas */}
                {modais.map((modal) => (
                    openModalId === modal.id && (
                        <div key={modal.id} className="modal">
                            <div ref={modalRef} className="modal-content">
                                <span className="close" onClick={closeModal}>&times;</span>
                                <h2>{modal.title}</h2>
                                <img src={modal.imageUrl} alt='Imagem de Laboratório'></img>
                                {/* Renderiza a lista de itens dentro do content */}
                                <ul className='list-itens'>
                                    <li>
                                        <h4>Quantidade</h4>
                                        <h4>Componente</h4>
                                    </li>
                                    {modal.content.map((item, index) => (
                                        <li>
                                            {/* <div key={index}> */}
                                                <h5>{item.amount}</h5>
                                                <h5>{item.description}</h5>
                                            {/* </div> */}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
}

export default Rooms;
