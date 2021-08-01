import api from "_common/services/api";

const BASE_PATH = "/dash";

const get = () => api.get(BASE_PATH);

const dashboardService = {
  get
};

export default dashboardService;
