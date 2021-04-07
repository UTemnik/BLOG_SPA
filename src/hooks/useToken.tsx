import { useEffect, useState } from 'react';

export function useToken() {
  const [accessToken, setAccessToken] = useState('');
  useEffect(() => {
    const url = new URLSearchParams(window.location.hash);
    const token = url.get('#access_token');
     /*  window.location.hash = '';*/
     history.pushState('', document.title, window.location.pathname);
    if (token) {
      setAccessToken(token);
    }
  }, []);

  return [accessToken];
}
