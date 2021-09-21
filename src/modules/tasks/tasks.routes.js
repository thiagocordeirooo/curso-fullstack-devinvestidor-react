import { Route, Switch } from 'react-router-dom';
import TasksList from './TasksList';
import { TaskListContextProvider } from './TasksList/context/TaskListContext';

const TasksRoutes = ({ match: { url } }) => {
  return (
    <Switch>
      <TaskListContextProvider>
        <Route path={`${url}/:status?`} component={TasksList} />
      </TaskListContextProvider>
    </Switch>
  );
};

export default TasksRoutes;
