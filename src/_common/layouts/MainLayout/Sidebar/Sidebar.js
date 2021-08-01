import { useContext } from "react";
import SidebarView from "./SidebarView";
import { MainLayoutContext } from "../context/MainLayoutContext";

const Sidebar = () => {
  const { sidebarOpen } = useContext(MainLayoutContext);

  return <SidebarView {...{ sidebarOpen }} />;
};

export default Sidebar;
