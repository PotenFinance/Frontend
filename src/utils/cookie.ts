import { parseCookies, setCookie as nookiesSetCookie, destroyCookie } from 'nookies';

export const getCookie = (key: string) => {
  const cookies = parseCookies(null);
  return cookies[key];
};

export const setCookie = (key: string, value: string, options?: object): void => {
  nookiesSetCookie(null, key, value, { path: '/', ...options });
};

export const deleteCookie = (key: string): void => {
  destroyCookie(null, key, { path: '/' });
};
