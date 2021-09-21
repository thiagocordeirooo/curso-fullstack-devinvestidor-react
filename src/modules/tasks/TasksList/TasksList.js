import { useContext } from 'react';
import { TaskListContext } from './context/TaskListContext';
import TasksListView from './TasksListView';

const TasksList = () => {
  const { taskDialog, setTaskDialog } = useContext(TaskListContext);

  const handleNew = () => setTaskDialog({ open: true });

  return <TasksListView {...{ taskDialog, handleNew }} />;
};

export default TasksList;
