import UserService from 'modules/users/services/user.service';
import { useContext, useEffect, useState } from 'react';
import { UsersListContext } from '../context/UsersListContext';
import UsersListTableView from './UsersListTableView';

const UsersListTable = () => {
  const { users, setUsers, filter, setUserDialog } = useContext(UsersListContext);

  const [filteredUsers, setFilteredUsers] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const {
        data: { body }
      } = await UserService.getAll();
      setUsers(body);
      setFilteredUsers(body);
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

  return <UsersListTableView users={filteredUsers} {...{ handleEdit }} />;
};

export default UsersListTable;
