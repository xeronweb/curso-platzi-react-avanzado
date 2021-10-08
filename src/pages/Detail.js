import React, { Fragment } from 'react';
import { PhotoCardWithQuery } from '../container/PhotoCatWithQuery';

export const Detail = ({detailId}) => {
    return (
        <PhotoCardWithQuery id={detailId} />
    )
}