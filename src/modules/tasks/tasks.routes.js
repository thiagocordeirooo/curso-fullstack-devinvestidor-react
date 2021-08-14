import { Route, Switch } from 'react-router-dom';
import TasksList from './TasksList';

const TasksRoutes = ({ match: { url } }) => {
  return (
    <Switch>
      <Route path={`${url}/`} component={TasksList} />
    </Switch>
  );
};

export default TasksRoutes;
