import axios from 'axios';
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
    axios
      .get('https://oauth.reddit.com/api/v1/me', {
        headers: { Authorization: `bearer ${accessToken}` },
      })
      .then((response) => {
        const userData = response.data;
        setData({ userName: userData.name, iconImg: userData.icon_img });
      })
      .catch(console.log);
  }, [accessToken]);

  return [data];
}
