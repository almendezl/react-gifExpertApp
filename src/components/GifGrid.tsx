import React, { useEffect, useState } from 'react'
import { Gif } from '../interfaces/Gif';
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';



export const GifGrid = ({category}:{category:string}) => {
    //contiene una grilla que se va a llenar con imagenes
    //depende de la categoria
 
    const {data:images, loading} = useFetchGifs({category});

  return (
    <>
    <h3 className='animate__fadeIn'>{category}</h3>
    {/* condicional ternario para el loading */}
    {loading && <p>Loading</p>}

    <div className='card-grid'> 
        
        {/* poner los gifs en un componente tipo gifgriditem
        y asignarle una key  */}
         { 
                images.map((img:Gif) => (
                    <GifGridItem
                        key={img.id}
                        gif={img}
                    />
                ))
        } 
    </div>
    </>
  )
}
