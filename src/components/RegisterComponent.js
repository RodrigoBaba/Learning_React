import React, { useState, useRef, useEffect } from 'react';
import '../styles/RegisterComponent.css';
import Navigation from '../components/Navigation';

function RegisterComponent() {
    const selectRef = useRef(null);
    const modalRef = useRef(null);
    const inputRef = useRef(null);
  
    const [modalOpen, setModalOpen] = useState(false);
  
    const handleSelectChange = (e) => {
      if (e.target.value === 'add-new') {
        setModalOpen(true);
      }
    };
  
    const handleCancel = () => {
      setModalOpen(false);
      selectRef.current.value = '';
    };
  
    const handleSave = () => {
      const newCategory = inputRef.current.value.trim();
      if (newCategory) {
        const option = document.createElement('option');
        option.value = newCategory.toLowerCase();
        option.textContent = newCategory;
  
        selectRef.current.insertBefore(option, selectRef.current.querySelector('option[value="add-new"]'));
        option.selected = true;
  
        inputRef.current.value = '';
        setModalOpen(false);
      }
    };

    return (
        <div className='container-main'>
            <Navigation />
            {/* <MenuUser/> */}
            <div className='container-content'>
                <div className='container-register-component'>
                    <h1>Cadastrar Componente</h1>

                    <form className='form-container'>
                        <div className='form-inputs'>
                            <label htmlFor='category'>Categoria</label>
                            <select id='category' name='category' ref={selectRef} onChange={handleSelectChange} defaultValue=''>
                                <option value='' disabled>Selecione Categoria</option>
                                <option value='add-new'>+ Adicionar nova categoria</option>
                                <option value='hardware'>Hardware</option>
                                <option value='software'>Software</option>
                                <option value='network'>Rede</option>
                            </select>

                            {modalOpen && (
                                <div className='modal' ref={modalRef}>
                                    <div className='modal-content'>
                                        <h1>Registrar Categoria</h1>
                                        <div className='form-inputs'>
                                            <label htmlFor='category'>Categoria</label>
                                            <input type='text' ref={inputRef} placeholder='Digite nova categoria' />
                                        </div>                                    
                                        <div className='form-buttons'>
                                            <button className='button-cancel' onClick={handleCancel}>Cancelar</button>
                                            <button className='button-save' onClick={handleSave}>Salvar</button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <label htmlFor='name'>Nome</label>
                            <input type='text' id='name' name='nome' placeholder='Nome do Componente'/>

                            <label htmlFor='quantity'>Quantidade</label>
                            <input type='number' id='quantity' name='quantity' placeholder='Quantidade de Componentes' min='1' step='1'/>
                        </div>
                        <div className='form-buttons'>
                            <button className='button-cancel' type='button'>Cancelar</button>
                            <button className='button-save' type='submit'>Salvar</button>
                        </div>
                    </form>         
                </div>    
            </div>         
        </div>
    );
}

export default RegisterComponent;
