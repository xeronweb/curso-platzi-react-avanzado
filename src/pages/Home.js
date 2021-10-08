import React, { Fragment } from 'react';
import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCats } from '../components/ListOfPhotoCats';

export const Home = ({categoryId}) => {
    return (
        <Fragment>
            <ListOfCategories />
            <ListOfPhotoCats categoryId={categoryId} />
        </Fragment>
    )
}