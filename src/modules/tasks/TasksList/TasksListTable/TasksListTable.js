import TaskService from 'modules/tasks/services/task.service';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useSnackbar from '_common/hooks/useSnackbar';
import { TaskListContext } from '../context/TaskListContext';
import TasksListTableView from './TasksListTableView';

const TasksListTable = () => {
  const { tasks, setTasks, filter, setTaskDialog } = useContext(TaskListContext);
  const { status } = useParams();

  const { snackbar, snackbarSuccess } = useSnackbar();

  const [filteredTasks, setFilteredTasks] = useState(null);

  const [taskDelete, setTaskDelete] = useState(null);

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

  const handleEdit = (task) => {
    setTaskDialog({ open: true, task: { ...task, responsible: task.responsible._id } });
  };

  const handleDeleteConfirmation = async () => {
    try {
      await TaskService.remove(taskDelete._id);

      setTasks((prevTasks) => prevTasks.filter((prevTask) => prevTask._id !== taskDelete._id));

      snackbarSuccess();
    } catch ({ response: { data } }) {
      snackbar(data.message);
    } finally {
      setTaskDelete(null);
    }
  };

  return <TasksListTableView tasks={filteredTasks} {...{ handleEdit, taskDelete, setTaskDelete, handleDeleteConfirmation }} />;
};

export default TasksListTable;
