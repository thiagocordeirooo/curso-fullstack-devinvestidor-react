import { Switch, Route } from 'react-router-dom';

const UsersRoutes = ({ match: { url } }) => {
  return (
    <Switch>
      <Route path={`${url}/`} component={() => <>Users Sub</>} />
    </Switch>
  );
};

export default UsersRoutes;
