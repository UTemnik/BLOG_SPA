import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { tokenContext } from './../context/tokenContext';

export function usePostsData() {
  const accessToken = useContext(tokenContext);

  const [posts, setPosts] = useState('');

  useEffect(() => {
    axios
      .get('https://www.reddit.com/dev/api/best', {
        headers: { Authorization: `bearer ${accessToken}` },
      })
      .then((response) => {
        const data = response.data
        setPosts(data);
      })
      .catch(console.log);
  }, []);

  return [posts];
}
