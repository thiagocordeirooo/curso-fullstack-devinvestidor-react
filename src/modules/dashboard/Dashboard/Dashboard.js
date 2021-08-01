import { useEffect, useState } from "react";
import dashboardService from "../services/dashboard.service";
import DashboardView from "./DashboardView";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { body }
      } = await dashboardService.get();

      setTasks(body);
    };
    fetchData();
  }, []);

  return <DashboardView {...{ tasks }} />;
};

export default Dashboard;
