import { createContext, memo, useState } from "react";

export const UsersContext = createContext(null);
UsersContext.displayName = "UsersContext";

export const UsersContextProvider = memo(({ children }) => {
  const [users, setUsers] = useState(null);
  const [filter, setFilter] = useState("");
  const [userDialog, setUserDialog] = useState({ open: false });

  return (
    <UsersContext.Provider value={{ users, setUsers, filter, setFilter, userDialog, setUserDialog }}>{children}</UsersContext.Provider>
  );
});
