import taskService from "modules/tasks/services/task.service";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSnackbar from "_common/hooks/useSnackbar";
import { TasksContext } from "../context/TasksContext";
import TasksTableView from "./TasksTableView";

export default function TasksTable() {
  const { tasks, setTasks, filter, setTaskDialog } = useContext(TasksContext);
  const { snackbarSuccess, snackbar } = useSnackbar();
  const { status } = useParams();

  const [filteredTasks, setFilteredTasks] = useState(null);
  const [taskDelete, setTaskDelete] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      setTasks(null);
      const {
        data: { body }
      } = await taskService.getByStatus(status);

      setTasks(body || []);
      setFilteredTasks(body || []);
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
          task.responsible.name.toLowerCase().includes(filter.toLowerCase()) ||
          task.status.toLowerCase().includes(filter.toLowerCase())
      );
      setFilteredTasks(result);
    }
  }, [filter, tasks]);

  const handleEdit = (task) => {
    setTaskDialog({ open: true, task: { ...task, responsible: task.responsible._id } });
  };

  const handleDeleteConfirmation = async () => {
    try {
      await taskService.deleteTask(taskDelete);
      setTasks((prevTasks) => prevTasks.filter((prevTask) => prevTask._id !== taskDelete._id));
      snackbarSuccess();
    } catch ({ response: { data } }) {
      snackbar(data.message);
    } finally {
      setTaskDelete(null);
    }
  };

  return <TasksTableView tasks={filteredTasks} {...{ handleEdit, taskDelete, setTaskDelete, handleDeleteConfirmation }} />;
}
