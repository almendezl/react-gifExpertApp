import React from 'react'
import { Gif } from '../interfaces/Gif';

//hacer la peticion http
export const  getGifs  = async ({category}:{category:string})=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=ECu5svly0HnyQvffRnBxXZfSy18S0Nn8`;

    const resp = await fetch(url);

    // al poner las llaves se desestructura la respuesta y trae 
    //el q se llama data. es lo mismo q poner .data
    const {data} = await resp.json();

    
    const gifs: Gif[] = data.map( (img: any) => {
        //retornar el objeto de tipo Gifs creandolo con lo q trae el api
        //console.log('retorno 1');
        return {
            
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
        
    });

    return gifs;

}