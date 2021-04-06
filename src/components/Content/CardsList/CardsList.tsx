import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { tokenContext } from './../../../context/tokenContext';
import Card from './Card/Card';
import s from './cardsList.less';

const CardsList = () => {
  const accessToken = useContext(tokenContext);
  const [posts, setPosts] = useState('');

  useEffect(() => {
    axios
      .get('https://oauth.reddit.com/r/redditdev/best', {
        headers: { Authorization: `bearer ${accessToken}` },
      })
      .then((response) => {
        setPosts(response.data);
      })
      .catch(console.log);
  }, []);

  console.log(posts);

  return (
    <ul className={s.cardsList}>
      <Card />
    </ul>
  );
};

export default CardsList;
