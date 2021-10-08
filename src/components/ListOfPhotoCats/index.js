import React from 'react';
import { PhotoCat } from '../PhotoCat';
import { useGetPhotos } from '../../hooks/usePhotos';
import { BigDotSpinner } from '../Spinners/DotSpinnerBig/DotSpinnerBig';



export const ListOfPhotoCats = ({categoryId = 1}) => {
    const { loading, error, data } = useGetPhotos(categoryId);
    
    if (loading) return <BigDotSpinner />
    if (error) return <p>Error</p>

    return (
        <div>
          {data.photos.map((photoCard, id) => (
            <PhotoCat key={id} {...photoCard} />
          ))}
        </div>
    )
}

