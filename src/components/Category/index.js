import React from 'react';
import { Link, Image} from './styles'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpeg';


export const Category = ({ cover = DEFAULT_IMAGE, path = '#', emoji = '?'}) => {
    return (
        <Link to={path}>
            <Image src={cover} />
            {emoji}
        </Link>
    )
}
