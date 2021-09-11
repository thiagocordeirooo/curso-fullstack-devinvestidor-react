import { Route, Switch } from 'react-router-dom';
import UsersList from './UsersList';
import { UsersListContextProvider } from './UsersList/context/UsersListContext';

const UsersRoutes = ({ match: { url } }) => {
  return (
    <Switch>
      <UsersListContextProvider>
        <Route path={`${url}/`} component={UsersList} />
      </UsersListContextProvider>
    </Switch>
  );
};

export default UsersRoutes;
