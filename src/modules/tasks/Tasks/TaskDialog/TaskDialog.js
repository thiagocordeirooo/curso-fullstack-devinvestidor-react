import { useFormik } from "formik";
import { useContext, useState, useEffect } from "react";
import { STATUS_TASK } from "_common/constants";
import useSnackbar from "_common/hooks/useSnackbar";
import Yup from "_common/utils/YupValidator";
import taskService from "../../services/task.service";
import { TasksContext } from "../context/TasksContext";
import TaskDialogView from "./TaskDialogView";

export default function TaskDialog() {
  const { setTasks, taskDialog, setTaskDialog } = useContext(TasksContext);
  const { snackbarSuccess, snackbar } = useSnackbar();

  const [responsibles, setResponsibles] = useState([]);

  useEffect(() => {
    const fetchResponsibles = async () => {
      const {
        data: { body }
      } = await taskService.getResponsibles();
      setResponsibles(body);
    };

    fetchResponsibles();
  }, []);

  const validationSchema = Yup.object().shape({
    status: Yup.string().oneOf([STATUS_TASK.OPEN, STATUS_TASK.FINISHED]).required(),
    description: Yup.string().max(100).required(),
    responsible: Yup.string().required()
  });

  const initialValues = {
    status: STATUS_TASK.OPEN,
    description: "",
    responsible: ""
  };

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      if (values._id) {
        const { data } = await taskService.put(values);
        updatetasksContext(data.body);
      } else {
        const { data } = await taskService.post(values);
        updatetasksContext(data.body, true);
      }
      snackbarSuccess();
      handleClose();
    } catch ({ response: { data } }) {
      snackbar(data.message);
    } finally {
      setSubmitting(false);
    }
  };

  const updatetasksContext = (task, isNew) => {
    if (isNew) {
      setTasks((prevTasks) => [...prevTasks, task]);
    } else {
      setTasks((prevTasks) => prevTasks.map((prevTask) => (prevTask._id === task._id ? task : prevTask)));
    }
  };

  const form = useFormik({
    initialValues: taskDialog.task || initialValues,
    validationSchema,
    onSubmit
  });

  const handleClose = () => setTaskDialog({ open: false });

  return <TaskDialogView {...{ open: taskDialog.open, form, handleClose, responsibles }} />;
}
