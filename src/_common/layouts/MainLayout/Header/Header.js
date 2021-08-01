import { useContext } from "react";
import { MainLayoutContext } from "../context/MainLayoutContext";
import HeaderView from "./HeaderView";

const Header = () => {
  const { sidebarOpen, setSidebarOpen } = useContext(MainLayoutContext);

  const handleToggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return <HeaderView {...{ handleToggleSidebar }} />;
};

export default Header;
