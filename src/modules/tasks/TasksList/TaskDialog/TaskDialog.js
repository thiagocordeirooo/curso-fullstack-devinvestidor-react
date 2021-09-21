import { useFormik } from 'formik';
import Yup from '_common/utils/YupValidator';
import TaskDialogView from './TaskDialogView';
import { LOGGED_USER_ID, TASK_STATUS } from '_common/constants/common.constants';
import { useContext, useEffect, useState } from 'react';
import TaskService from 'modules/tasks/services/task.service';
import useSnackbar from '_common/hooks/useSnackbar';
import { TaskListContext } from '../context/TaskListContext';

const TaskDialog = () => {
  const { setTasks, setTaskDialog } = useContext(TaskListContext);
  const { snackbarSuccess } = useSnackbar();
  const [responsibles, setresponsibles] = useState([]);

  useEffect(() => {
    const fetchResponsibles = async () => {
      const {
        data: { body }
      } = await TaskService.getResponsibles();

      setresponsibles(body);
    };

    fetchResponsibles();
  }, []);

  const validationSchema = Yup.object().shape({
    status: Yup.string().oneOf([TASK_STATUS.OPEN, TASK_STATUS.FINISHED]).required(),
    description: Yup.string().max(100).required(),
    responsible: Yup.string().required()
  });

  const initialValues = {
    status: TASK_STATUS.OPEN,
    description: '',
    responsible: LOGGED_USER_ID
  };

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const {
        data: { body }
      } = await TaskService.post(values);

      setTasks((prevtasks) => [...prevtasks, body]);

      snackbarSuccess();
      handleOnClose();
    } catch (error) {
    } finally {
      setSubmitting(false);
    }
  };

  const form = useFormik({
    validationSchema,
    initialValues,
    onSubmit
  });

  const handleOnClose = () => setTaskDialog({ open: false });

  return <TaskDialogView {...{ form, responsibles, handleOnClose }} />;
};

export default TaskDialog;
