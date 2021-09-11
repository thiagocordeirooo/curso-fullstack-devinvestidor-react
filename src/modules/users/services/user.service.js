import api from '_common/services/api';

const BASE_PATH = '/user';

const getAll = () => {
  return api.get(BASE_PATH);
};

const post = (values) => {
  return api.post(BASE_PATH, values);
};

const UserService = { getAll, post };

export default UserService;
