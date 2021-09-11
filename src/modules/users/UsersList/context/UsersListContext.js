import { createContext, memo, useState } from 'react';

export const UsersListContext = createContext(null);
UsersListContext.displayName = 'UsersListContext';

export const UsersListContextProvider = memo(({ children }) => {
  const [users, setUsers] = useState(null);
  const [filter, setFilter] = useState('');
  const [userDialog, setUserDialog] = useState({ open: false });

  return (
    <UsersListContext.Provider value={{ users, setUsers, filter, setFilter, userDialog, setUserDialog }}>
      {children}
    </UsersListContext.Provider>
  );
});
