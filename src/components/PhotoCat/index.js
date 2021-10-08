import React, { Fragment, useEffect, useRef, useState } from "react";
import { Article, Button, Img, ImgWrapper } from "./styles";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";
import { FavButton } from "../FavButton";
import { useMuationToogleLike } from "../../hooks/useMutationToogleLike";
import { Link } from "@reach/router";

export const PhotoCat = ({ id, likes = 0, src = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg' }) => {
  const [show, element] = useNearScreen();  
  const { mutation, mutationLoading, mutationError } = useMuationToogleLike()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false);
  
  const handleFavClick = () => {
    !liked && mutation({
      variables: {
        input: { id }
      }
    })
    setLiked(!liked)
  }

  return (
    <Article ref={element}>
      {
        show && <Fragment>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick}/>
        </Fragment>
      }
    </Article>
  );
};
