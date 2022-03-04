import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {
    // aqui se muestra un listado de las categorias 
    const [categories,setCategories] = useState(['One punch']);

    // const handleAdd = () => {
        
    //     setCategories([...categories, 'HunterXHunter']);
    //     //opcion 2 
    //     //setCategories(cats =>[...cats, 'Otro']);

    // }
  return (


    <>
        <h2>GifExpertApp</h2>
        {/* agregar el add category */}
        {/* enviar a addcategory la funcion de setcategories */}
        <AddCategory setCategories={setCategories}/>
        <hr />


        {/* <button onClick={handleAdd}>Agregar</button> */}
        <ol>
            {
                //map permite transformar y obtener todos
                //los elementos del arreglo
                categories.map(category =>{
                    //category va a cambiando con cada elemento
                    // <li key={category}>{category}</li>

                    return <GifGrid 
                        key={category}
                        category={category}
                    />
                })
            }
        </ol>
    </>
  )
}
