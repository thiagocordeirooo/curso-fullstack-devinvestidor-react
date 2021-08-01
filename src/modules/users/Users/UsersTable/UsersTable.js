import { useContext, useEffect, useState } from "react";
import useSnackbar from "_common/hooks/useSnackbar";
import userService from "../../services/user.service";
import { UsersContext } from "../context/UsersContext";
import UsersTableView from "./UsersTableView";

export default function UsersTable() {
  const { users, setUsers, filter, setUserDialog } = useContext(UsersContext);
  const { snackbarSuccess, snackbar } = useSnackbar();

  const [filteredUsers, setFilteredUsers] = useState(null);
  const [userDelete, setUserDelete] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const {
        data: { body }
      } = await userService.getAll();

      setUsers(body || []);
      setFilteredUsers(body || []);
    };

    fetchUsers();
  }, [setUsers]);

  useEffect(() => {
    if (users) {
      const result = users.filter(
        (user) => user.name.toLowerCase().includes(filter.toLowerCase()) || user.email.toLowerCase().includes(filter.toLowerCase())
      );
      setFilteredUsers(result);
    }
  }, [filter, users]);

  const handleEdit = (user) => setUserDialog({ open: true, user });

  const handleDeleteConfirmation = async () => {
    try {
      await userService.deleteUser(userDelete);
      setUsers((prevUsers) => prevUsers.filter((preUser) => preUser._id !== userDelete._id));
      snackbarSuccess();
    } catch ({ response: { data } }) {
      snackbar(data.message);
    } finally {
      setUserDelete(null);
    }
  };

  return <UsersTableView users={filteredUsers} {...{ handleEdit, setUserDelete, userDelete, handleDeleteConfirmation }} />;
}
