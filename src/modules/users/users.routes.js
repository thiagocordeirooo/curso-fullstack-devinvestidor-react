import { Route, Switch } from 'react-router-dom';
import UsersList from './UsersList';

const UsersRoutes = ({ match: { url } }) => {
  return (
    <Switch>
      <Route path={`${url}/`} component={UsersList} />
    </Switch>
  );
};

export default UsersRoutes;
