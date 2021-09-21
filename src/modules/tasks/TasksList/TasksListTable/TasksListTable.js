import TaskService from 'modules/tasks/services/task.service';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { TaskListContext } from '../context/TaskListContext';
import TasksListTableView from './TasksListTableView';

const TasksListTable = () => {
  const { tasks, setTasks, filter } = useContext(TaskListContext);
  const { status } = useParams();

  const [filteredTasks, setFilteredTasks] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      const {
        data: { body }
      } = await TaskService.getByStatus(status);

      setTasks(body);
      setFilteredTasks(body);
    };

    fetchTasks();

    return () => {
      setTasks(null);
      setFilteredTasks(null);
    };
  }, [setTasks, status]);

  useEffect(() => {
    if (tasks) {
      const result = tasks.filter(
        (task) =>
          task.description.toLowerCase().includes(filter.toLowerCase()) ||
          task.responsible.name.toLowerCase().includes(filter.toLowerCase())
      );

      setFilteredTasks(result);
    }
  }, [filter, tasks]);

  return <TasksListTableView tasks={filteredTasks} />;
};

export default TasksListTable;
