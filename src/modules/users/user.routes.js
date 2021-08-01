import { Route, Switch } from "react-router-dom";
import { UsersContextProvider } from "./Users/context/UsersContext";
import UsersComponent from "./Users";

const UsersRoutes = ({ match: { url } }) => (
  <Switch>
    <UsersContextProvider>
      <Route path={`${url}/`} component={UsersComponent} />
    </UsersContextProvider>
  </Switch>
);

export default UsersRoutes;
