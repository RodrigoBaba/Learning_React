import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ReserveComponent.css';
import Navigation from '../components/Navigation';
import Laboratorio1Imagem from '../assets/Jumpers.jpg'
import Laboratorio2Imagem from '../assets/Resistores.jpg'
import Laboratorio3Imagem from '../assets/TemperaturaUmidade.jpg'
import Laboratorio4Imagem from '../assets/Placa.jpg'

function ReserveComponent() {
    const navigate = useNavigate();

    const handleClick = (categoria) => {
        navigate(`/category/${categoria}`);
    };

    const modais = [
        { 
            id: 1,
            category:'Jumpers', 
            title: 'Jumpers', 
            imageUrl: Laboratorio1Imagem
        },
        { 
            id: 2, 
            category:'Resistores',
            title: 'Resistores', 
            imageUrl: Laboratorio2Imagem },
        { 
            id: 3, 
            category:'TemperaturaUmidade',
            title: 'TemperaturaUmidade', 
            imageUrl: Laboratorio3Imagem },
        { 
            id: 4, 
            category:'Placas',
            title: 'Placas', 
            imageUrl: Laboratorio4Imagem 
        }
    ];

    return (
        <div className='container-main'>
            <Navigation />
            {/* <MenuUser/> */}
            <div className='container-content'>
                <div className='container-reserve-component'>
                    <h1>Lista de Categorias</h1>  
                    <div className="button-container">
                        {modais.map((modal) => (
                            <button key={modal.id} className='button-reserve-component' onClick={() => handleClick(modal.category)}>
                                <img src={modal.imageUrl}></img>
                                <h1>{modal.title}</h1>
                            </button>
                        ))}
                    </div>
                </div>    
            </div>         
        </div>
    );
}

export default ReserveComponent;
