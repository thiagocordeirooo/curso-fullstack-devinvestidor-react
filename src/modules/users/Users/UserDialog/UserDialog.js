import { useFormik } from "formik";
import { useContext } from "react";
import useSnackbar from "_common/hooks/useSnackbar";
import Yup from "_common/utils/YupValidator";
import userService from "../../services/user.service";
import { UsersContext } from "../context/UsersContext";
import UserDialogView from "./UserDialogView";

export default function UserDialog() {
  const { setUsers, userDialog, setUserDialog } = useContext(UsersContext);
  const { snackbarSuccess, snackbar } = useSnackbar();

  const validationSchema = Yup.object().shape({
    name: Yup.string().max(50).required(),
    email: Yup.string().email().required(),
    password: Yup.string()
      .max(30)
      .when("_id", {
        is: (_id) => !!_id,
        then: Yup.string(),
        otherwise: Yup.string().required()
      })
  });

  const initialValues = {
    name: "",
    email: "",
    password: ""
  };

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      if (values._id) {
        await userService.put(values);
        updateUsersContext(values);
      } else {
        const { data } = await userService.post(values);
        updateUsersContext(data.body, true);
      }
      snackbarSuccess();
      handleClose();
    } catch ({ response: { data } }) {
      snackbar(data.message);
    } finally {
      setSubmitting(false);
    }
  };

  const updateUsersContext = (user, isNew) => {
    if (isNew) {
      setUsers((prevUsers) => [...prevUsers, user]);
    } else {
      setUsers((prevUsers) => prevUsers.map((prevUser) => (prevUser._id === user._id ? user : prevUser)));
    }
  };

  const form = useFormik({
    initialValues: userDialog.user || initialValues,
    validationSchema,
    onSubmit
  });

  const handleClose = () => setUserDialog({ open: false });

  return <UserDialogView {...{ open: userDialog.open, handleClose, form }} />;
}
