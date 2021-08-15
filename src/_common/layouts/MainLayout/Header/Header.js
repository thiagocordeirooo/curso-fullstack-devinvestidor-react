import HeaderView from './HeaderView';
import { useContext } from 'react';
import { MainLayoutContext } from '../context/MainLayoutContext';

const Header = () => {
  const { sidebarOpen, setSidebarOpen } = useContext(MainLayoutContext);

  const handleToggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return <HeaderView {...{ handleToggleSidebar }} />;
};

export default Header;
