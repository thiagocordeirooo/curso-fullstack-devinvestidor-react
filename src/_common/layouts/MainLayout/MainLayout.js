import { useContext } from 'react';
import { MainLayoutContext } from './context/MainLayoutContext';
import MainLayoutView from './MainLayoutView';

const MainLayout = ({ children }) => {
  const { sidebarOpen } = useContext(MainLayoutContext);
  return <MainLayoutView {...{ children, sidebarOpen }} />;
};

export default MainLayout;
