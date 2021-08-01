import userSevice from "modules/users/services/user.service";
import { LOGGED_USER_ID } from "_common/constants";
import api from "_common/services/api";
import { STATUS_TASK_ROUTE } from "../constants";

const BASE_PATH = "/task";

const getByStatus = (status) => {
  const statusCode = STATUS_TASK_ROUTE[status] || 3;
  return api.get(`${BASE_PATH}/${statusCode}/${LOGGED_USER_ID}`);
};

const post = (task) => {
  return api.post(`${BASE_PATH}`, task);
};

const put = (task) => {
  return api.put(`${BASE_PATH}/${task._id}`, task);
};

const deleteTask = (task) => {
  return api.delete(`${BASE_PATH}/${task._id}`);
};

const getResponsibles = () => {
  return userSevice.getAll();
};

const taskService = {
  getByStatus,
  post,
  put,
  deleteTask,
  getResponsibles
};

export default taskService;
