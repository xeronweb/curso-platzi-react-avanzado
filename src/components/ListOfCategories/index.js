import React, { Fragment, useEffect, useState } from "react";
import { Category } from "../Category";
import { List, Item } from "./styles";


function useCategoriesData() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      const response = await window.fetch('https://petgram-server-edsf8xpy2.now.sh/categories')
      const data = await response.json();
      setCategories(data)
      setLoading(false);
    }
    fetchCategories();
  }, [])

  return { categories, loading };
}

export const ListOfCategories = () => {

  const [showFixed, setShowFixed] = useState(false)
  const {categories, loading} = useCategoriesData();

  useEffect(() => { 
    const onScroll = e => {
      const newShowFixed = window.scrollY>200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    return () =>{
      document.removeEventListener('scroll', onScroll)
    }
  },)

  const renderList = (fixed) => {
    return <List fixed={fixed}>
      {
        loading 
          ? <Item key='loading'><Category /></Item>
          : categories.map((category) => (
              <Item key={category.id}>
                <Category
                  {...category}
                  path={`/pet/${category.id}`}
                />
              </Item>
            ))
      }
    </List>
  }


  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  );
};
