import api from '_common/services/api';

const BASE_PATH = '/user';

const getAll = () => {
  return api.get(BASE_PATH);
};

const UserService = { getAll };

export default UserService;
