// app/contexts/UserContext.tsx

import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

// 1. Define the context value type
interface UserContextType {
  user: any;
  setUser: Dispatch<SetStateAction<any>>;
}

// 2. Create the context with default value
const UserContext = createContext<UserContextType | undefined>(undefined);

// 3. Provider component
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// 4. Hook to use the context
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
