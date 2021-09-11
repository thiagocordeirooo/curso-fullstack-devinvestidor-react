import api from '_common/services/api';

const BASE_PATH = '/user';

const getAll = () => {
  return api.get(BASE_PATH);
};

const post = (user) => {
  return api.post(BASE_PATH, user);
};

const put = (user) => {
  return api.put(`${BASE_PATH}/${user._id}`, user);
};

const remove = (userId) => {
  return api.delete(`${BASE_PATH}/${userId}`);
};

const UserService = { getAll, post, put, remove };

export default UserService;
