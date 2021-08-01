import { Route, Switch } from "react-router-dom";
import TasksComponent from "./Tasks";
import { TasksContextProvider } from "./Tasks/context/TasksContext";

const TasksRoutes = ({ match: { url } }) => (
  <Switch>
    <TasksContextProvider>
      <Route path={`${url}/:status?`} component={TasksComponent} />
    </TasksContextProvider>
  </Switch>
);

export default TasksRoutes;
