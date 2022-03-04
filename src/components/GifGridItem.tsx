import React from 'react'
import { Gif } from '../interfaces/Gif'

export const GifGridItem = ({gif}:{gif:Gif}) => {

    console.log(gif);
  return (
    <div className="card animate__animated animate__bounce animate__delay-2s">
        <img src={gif.url} alt={gif.title} />
        <p>{gif.title}</p>

    </div>
  )
}
