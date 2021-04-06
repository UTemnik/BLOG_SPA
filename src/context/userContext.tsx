import React from 'react';
import { useUserData } from './../hooks/useUserData';

export interface IUserContextData {
  iconImg?: string;
  userName?: string;
}

export const userContext = React.createContext<IUserContextData>({});

export function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [data] = useUserData();
  return <userContext.Provider value={data}>{children}</userContext.Provider>;
}
