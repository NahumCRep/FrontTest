import React from 'react'
import { Link } from 'react-router-dom'
import { posterURL500 } from '../../api/config'
import '../../styles/card.css'

export const Card = ({ movie }) => {
    return (
        <div className='card-container'>
            <Link to={`/details/${movie.id}`}>
                <figure>
                    <img
                        src={`${posterURL500}/${movie.poster_path}`}
                        alt={`${movie.title}`} />
                </figure>
                <div className='card-body'>
                    <h2>{movie.title}</h2>
                </div>
            </Link>
        </div>
    )
}
