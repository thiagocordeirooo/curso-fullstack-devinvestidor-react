import { lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LazyLoading from '_common/components/LazyLoading';
import MainLayout from '_common/layouts/MainLayout';

const DashboardRoutes = lazy(() => import('modules/dashboard/dashboard.routes'));
const TasksRoutes = lazy(() => import('modules/tasks/tasks.routes'));
const UsersRoutes = lazy(() => import('modules/users/users.routes'));

const MainRoutes = () => {
  return (
    <MainLayout>
      <Switch>
        <Route path="/dashboard" component={LazyLoading(DashboardRoutes)} />
        <Route path="/tarefas" component={LazyLoading(TasksRoutes)} />
        <Route path="/usuarios" component={LazyLoading(UsersRoutes)} />

        <Redirect to="/dashboard" />
      </Switch>
    </MainLayout>
  );
};

export default MainRoutes;
