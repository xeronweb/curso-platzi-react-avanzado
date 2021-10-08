import React from 'react'
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Button } from './styles';

export const FavButton = ({liked, likes = 0, onClick}) => {

    const Icon = liked ? MdFavorite : MdFavoriteBorder;

    return (
        <>
            <Button onClick={onClick}>
                <Icon />{likes} likes !
            </Button>
        </>
    )
}
