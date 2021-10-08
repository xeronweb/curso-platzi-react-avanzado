import React from 'react'
import { PhotoCat } from '../components/PhotoCat'
import { BigDotSpinner } from '../components/Spinners/DotSpinnerBig/DotSpinnerBig';
import { useGetSinglePhotos } from '../hooks/useSinglePhoto';



export const PhotoCardWithQuery = ({ id }) => {

    const { loading, error, data } = useGetSinglePhotos(id);

    if (loading) return <BigDotSpinner />
    if (error) return <p>Error</p>

    return (
        <PhotoCat {...data.photo} />
    )
}