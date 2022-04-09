import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const CategoryAdd = ({ setCategories }) => {
  
    //se necesita el useState para saber lo que la persona esta escribiendo
    const [inputValue, setInputValue] = useState('');

    //con esta funcion se captura lo escrito y se actualiza el inputValue
    const handleInputChange = e => {
        setInputValue(e.target.value);
    }

    //captura el enter y con setCategories vinculo las categorias y actualizo con InputValue
    const handleSubmit = e => {
        e.preventDefault();
        
        //condiciona a que el input value sea mayor que 2 caracter, actualiza el setCategories y pone en vacio el setInputValue
        if ( inputValue.trim().length > 2 ) {
            setCategories( cats => [ inputValue, ...cats ]);
            setInputValue('');    
        }
        
    } 

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

CategoryAdd.propTypes = {
    setCategories: PropTypes.func.isRequired
}

