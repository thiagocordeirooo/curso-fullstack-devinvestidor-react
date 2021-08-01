import Grid from "@material-ui/core/Grid";
import BlurOnOutlinedIcon from "@material-ui/icons/BlurOnOutlined";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import WarningOutlinedIcon from "@material-ui/icons/WarningOutlined";
import PageHeader from "_common/components/PageHeader";
import { LOGGED_USER_ID, STATUS_TASK } from "_common/constants";
import MyTasksChart from "./charts/MyTasksChart";
import TasksByResponsible from "./charts/TasksByResponsible";
import DashboardCard from "./DashboardCard";

const DashboardView = ({ tasks }) => {
  const totalMyTasks = tasks.filter((t) => t.responsible._id === LOGGED_USER_ID).length;
  const totalOpenedTasks = tasks.filter((t) => t.status === STATUS_TASK.OPEN).length;
  const totalFinishedTasks = tasks.filter((t) => t.status === STATUS_TASK.FINISHED).length;

  return (
    <>
      <PageHeader title="Dashboard" />
      <Grid container spacing={2}>
        <DashboardCard title="Minhas" value={totalMyTasks} icon={<HomeOutlinedIcon />} color="info" path="/tarefas/minhas" />
        <DashboardCard title="Em Aberto" value={totalOpenedTasks} icon={<WarningOutlinedIcon />} color="warning" path="/tarefas/abertas" />
        <DashboardCard
          title="Finalizadas"
          value={totalFinishedTasks}
          icon={<DoneOutlineIcon />}
          color="success"
          path="/tarefas/finalizada"
        />
        <DashboardCard title="Todas" value={tasks.length} icon={<BlurOnOutlinedIcon />} path="/tarefas" />
      </Grid>
      <br />
      <br />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <MyTasksChart {...{ tasks }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TasksByResponsible {...{ tasks }} />
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardView;
