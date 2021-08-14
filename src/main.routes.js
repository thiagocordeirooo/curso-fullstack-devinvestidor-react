import { lazy } from 'react';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import LazyLoading from '_common/components/LazyLoading';

const DashboardRoutes = lazy(() => import('modules/dashboard/dashboard.routes'));
const TasksRoutes = lazy(() => import('modules/tasks/tasks.routes'));
const UsersRoutes = lazy(() => import('modules/users/users.routes'));

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/tarefas">Tarefas</Link>
            </li>
            <li>
              <Link to="/usuarios">Usuarios</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/dashboard" component={LazyLoading(DashboardRoutes)} />
          <Route path="/tarefas" component={LazyLoading(TasksRoutes)} />
          <Route path="/usuarios" component={LazyLoading(UsersRoutes)} />

          <Redirect to="/dashboard" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default MainRoutes;
