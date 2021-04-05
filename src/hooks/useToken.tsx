import { useEffect, useState } from 'react';

export function useToken() {
  const [accessToken, setAccessToken] = useState('');
  useEffect(() => {
    const url = new URLSearchParams(window.location.hash);
    const token = url.get('#access_token');
    if (token) {
      setAccessToken(token);
    }
  }, []);

  return [accessToken];
}
