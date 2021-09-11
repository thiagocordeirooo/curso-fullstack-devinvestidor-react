import { useFormik } from 'formik';
import UserDialogView from './UserDialogView';
import Yup from '_common/utils/YupValidator';
import UserService from 'modules/users/services/user.service';
import useSnackbar from '_common/hooks/useSnackbar';
import { useContext } from 'react';
import { UsersListContext } from '../context/UsersListContext';

const UserDialog = () => {
  const { setUsers, setUserDialog } = useContext(UsersListContext);

  const { snackbar } = useSnackbar();

  const handleOnClose = () => setUserDialog({ open: false });

  const validationSchema = Yup.object().shape({
    name: Yup.string().max(50).required(),
    email: Yup.string().email().required(),
    password: Yup.string()
      .max(30)
      .when('_id', {
        is: (_id) => !!_id,
        then: Yup.string(),
        otherwise: Yup.string().required()
      })
  });

  const initialValues = {
    name: '',
    email: '',
    password: ''
  };

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const {
        data: { body }
      } = await UserService.post(values);

      setUsers((prevUsers) => [...prevUsers, body]);

      handleOnClose();
    } catch ({ response: { data } }) {
      snackbar(data.message);
    } finally {
      setSubmitting(false);
    }
  };

  const form = useFormik({
    validationSchema,
    initialValues,
    onSubmit
  });

  return <UserDialogView {...{ form, handleOnClose }} />;
};

export default UserDialog;
