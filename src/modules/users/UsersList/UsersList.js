import { useContext } from 'react';
import { UsersListContext } from './context/UsersListContext';
import UsersListView from './UsersListView';

const UsersList = () => {
  const { userDialog, setUserDialog } = useContext(UsersListContext);

  const handleOpenUserDialog = () => setUserDialog({ open: true });

  return <UsersListView {...{ userDialog, handleOpenUserDialog }} />;
};

export default UsersList;
