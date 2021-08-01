import api from "_common/services/api";

const BASE_PATH = "/user";

const getAll = () => {
  return api.get(BASE_PATH);
};

const post = (values) => {
  return api.post(BASE_PATH, values);
};

const put = (values) => {
  return api.put(`${BASE_PATH}/${values._id}`, values);
};

const deleteUser = (values) => {
  return api.delete(`${BASE_PATH}/${values._id}`);
};

const userService = {
  getAll,
  post,
  put,
  deleteUser
};

export default userService;
