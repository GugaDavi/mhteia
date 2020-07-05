import React, { createContext, useCallback, useState, useContext } from 'react';
import { View } from 'react-native';

// import { Container } from './styles';
interface Request{
  user: UserInterface,
  signIn(name: string): void,
  signOut(): void
}

interface UserInterface{
  name: string | undefined;
}

const UserContext = createContext<Request>({} as Request);

export const UserProvider:  React.FC = ({children}) => {
  const [user, setUser] = useState<UserInterface>({} as UserInterface);
  const signIn = useCallback((name: string) => {
    setUser({name})
  }, [])

  const signOut = useCallback(() => {
    setUser({name: undefined})
  }, [])
  return(
    <UserContext.Provider value={{ user: user, signIn, signOut }}>
      {children}
    </UserContext.Provider>
  );
}
export function useAuth(){
  const context = useContext(UserContext)

  if(!context){
    throw new Error("Context not exists");
  }

  return context;
}
