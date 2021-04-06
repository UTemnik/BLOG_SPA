import superagent from 'superagent';
import { useContext, useEffect, useState } from 'react';
import { tokenContext } from './../context/tokenContext';
import {IPostsContextData} from './../context/PostsContext'

export function usePostsData() {

  const accessToken = useContext(tokenContext);
  const [posts, setPosts] = useState<IPostsContextData[]>([]);

  useEffect(() => {
    superagent
      .get('https://oauth.reddit.com/top.json')
      .set({ Authorization: `bearer ${accessToken}` })
      .query({ limit: '5' })
      .then((response) => {
        setPosts(response.body.data.children);
      })
      .catch((err) => console.log(err));
  }, []);

  return [posts];
}
