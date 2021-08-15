import { useContext } from 'react';
import { MainLayoutContext } from '../context/MainLayoutContext';
import SidebarView from './SidebarView';

const Sidebar = () => {
  const { sidebarOpen } = useContext(MainLayoutContext);

  return <SidebarView {...{ sidebarOpen }} />;
};

export default Sidebar;
