import React, { useState } from 'react'

// este componente es una caja de texto
//recibe la funcion setcategories de giftexpert

export const AddCategory = ({setCategories}:{setCategories: React.Dispatch<React.SetStateAction<string[]>>}) => {
    //se pone el usestate ya q va a cambiar su estado con el texto ingresado

    const [inputValue, setInputValue] = useState('');

    //extraer el valor cambiante de la caja
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //console.log();
        //usar el setstate para cambiar el valor
        setInputValue(e.target.value);
    }

    //poner una ccion cuando presionen enter

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        //verificar q no este vacio o q su longitud sea > 2
        if (inputValue.trim().length > 2) {
            //llamar el set categories para q actualice el listado con
            // lo que se ingreso en la caja de texto
            //setcategories trae el estado anterior q seria cats
            //y luego si se agrega la nueva categoria
            setCategories(cats =>[ inputValue, ...cats,]);
            //hacer q se vacie la caja de texto
            setInputValue('');
        }

    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={inputValue} 
                // para poder cambiar el valor inicial usa onchange
                onChange={handleInputChange}
                //por defecto este pasa el evento llamado e al metodo
            />
        </form>
        
    </>
  )
}
