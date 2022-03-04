import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import { Gif } from '../interfaces/Gif';

export const useFetchGifs = ({category}:{category: string}) => {
  
    const [state, setState] = useState <{data:Gif[], loading:boolean}>({data:[], loading:true});

        //poner el usseeffect para traer solo q vez los datos de la api

     useEffect(() => {
         //llamar al metodo q trae los gifs y es una promesa
        getGifs({category})
         .then(imgs => setState({data:imgs, loading:false}));
     }, [])

    return state;
}
