import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import '../styles/CategoryPage.css';

function CategoryPage() {
    const { nameCategory } = useParams();

    //   useEffect(() => {
    //     // Simulando uma requisição – aqui você faria uma chamada real à sua API
    //     fetch(`/api/produtos?category=${nameCategory}`);
    //   }, [nameCategory]);
    const modais = [
        {
            id: 1,
            category: 'Jumpers',
            name: 'Jumpers X',
            quantity: 15
        },{
            id: 2,
            category: 'Jumpers',
            name: 'Jumpers Y',
            quantity: 120
        },{
            id: 1,
            category: 'Resistores',
            name: 'Resistores X',
            quantity: 5
        },{
            id: 2,
            category: 'Resistores',
            name: 'Resistores Z',
            quantity: 150
        },{
            id: 1,
            category: 'TemperaturaUmidade',
            name: 'TemperaturaUmidade V',
            quantity: 150
        },{
            id: 2,
            category: 'TemperaturaUmidade',
            name: 'TemperaturaUmidade E',
            quantity: 153
        },{
            id: 1,
            category: 'Placas',
            name: 'Placas J',
            quantity: 7
        },{
            id: 2,
            category: 'Placas',
            name: 'Placas K',
            quantity: 29
        }
    ];

    return (
        <div className='container-main'>
            <Navigation />
            {/* <MenuUser/> */}
            <div className='container-content'>
                <h1>{nameCategory}</h1>
                <table class="tabela-estilizada">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Categoria</th>
                            <th>Quantidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {modais.map((modal) => (
                            modal.category === nameCategory && (                             
                                <tr>
                                    <td>{modal.id}</td>
                                    <td>{modal.name}</td>
                                    <td>{modal.category}</td>
                                    <td>{modal.quantity}</td>
                                </tr>
                            )
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CategoryPage;