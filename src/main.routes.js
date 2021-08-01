import { lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import LazyLoading from "_common/components/LazyLoading";
import MainLayout from "_common/layouts/MainLayout";

const DashboardRoutes = lazy(() => import("modules/dashboard/dashboard.routes"));
const UsersRoutes = lazy(() => import("modules/users/user.routes"));
const TasksRoutes = lazy(() => import("modules/tasks/tasks.routes"));

const MainRoutes = () => (
  <MainLayout>
    <Switch>
      <Route path="/dashboard" component={LazyLoading(DashboardRoutes)} />
      <Route path="/usuarios" component={LazyLoading(UsersRoutes)} />
      <Route path="/tarefas" component={LazyLoading(TasksRoutes)} />

      <Redirect to="dashboard" />
    </Switch>
  </MainLayout>
);

export default MainRoutes;
