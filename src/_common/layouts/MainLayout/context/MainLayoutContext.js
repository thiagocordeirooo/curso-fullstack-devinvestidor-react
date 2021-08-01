import { createContext, memo, useState } from "react";

export const MainLayoutContext = createContext(null);

export const MainLayoutContextProvider = memo(({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return <MainLayoutContext.Provider value={{ sidebarOpen, setSidebarOpen }}>{children}</MainLayoutContext.Provider>;
});
