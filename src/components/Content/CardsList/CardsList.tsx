import React, { useContext } from 'react';
import Card from './Card/Card';
import s from './cardsList.less';
import {
  IPostsContextData,
  postsContext,
} from './../../../context/PostsContext';

const CardsList = () => {
  const posts = useContext(postsContext);

  return (
    <ul className={s.cardsList}>
      {!!posts
        ? posts.map((elem: IPostsContextData) => {
            return (
              <Card
                imgSrc={elem.data['thumbnail']}
                key={elem.data.id}
                author={elem.data['author']}
                title={elem.data['title']}
                rating={elem.data['total_awards_received']}
              />
            );
          })
        : null}
    </ul>
  );
};

export default CardsList;
