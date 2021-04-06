import superagent from 'superagent';
import { useState, useEffect, useContext } from 'react';
import { tokenContext } from './../context/tokenContext';

interface IUserData {
  iconImg?: string;
  userName?: string;
}

export function useUserData() {
  const accessToken = useContext(tokenContext);
  const [data, setData] = useState<IUserData>({});

  useEffect(() => {
    superagent
      .get('https://oauth.reddit.com/api/v1/me')
      .set({ Authorization: `bearer ${accessToken}` })
      .then((response) => {
        const userData = response.body;
        setData({ userName: userData.name, iconImg: userData.icon_img });
      })
      .catch((err) => console.log(err));
  }, [accessToken]);

  return [data];
}
