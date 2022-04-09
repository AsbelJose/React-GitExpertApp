import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    
    //usamos un custom hook para hacer la conexion a la API
    const { data:images, loading } = useFetchGifs( category );

    return (
        <>
            <h3 className='animate__animated animate__fadeInDown'>{ category }</h3>

            {/* && significa que Si loading es true entonces evalua la condición sino, no hace nada. */}
            { loading && <p className='animate__animated animate__flash'>loading...</p> }
            <div className='card-grid'>
                
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img } 
                        />
                    ))
                }
            </div>
        </> 
    )
}
