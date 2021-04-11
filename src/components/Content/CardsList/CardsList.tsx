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
                imgSrc={elem.data['url']}
                key={elem.data.id}
                author={elem.data['author']}
                authorImg={elem.data.all_awardings[1].icon_url}
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
