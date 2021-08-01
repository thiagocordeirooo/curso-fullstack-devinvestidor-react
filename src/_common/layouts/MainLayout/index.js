import { MainLayoutContextProvider } from "./context/MainLayoutContext";
import MainLayout from "./MainLayout";

const MainLayoutWrapper = ({ children }) => (
  <MainLayoutContextProvider>
    <MainLayout>{children} </MainLayout>
  </MainLayoutContextProvider>
);

export default MainLayoutWrapper;
