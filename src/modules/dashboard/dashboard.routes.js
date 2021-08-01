import { Route, Switch } from "react-router-dom";
import DashboardComponent from "./Dashboard";

const DashboardRoutes = ({ match: { url } }) => (
  <Switch>
    <Route path={`${url}/`} component={DashboardComponent} />
  </Switch>
);

export default DashboardRoutes;
