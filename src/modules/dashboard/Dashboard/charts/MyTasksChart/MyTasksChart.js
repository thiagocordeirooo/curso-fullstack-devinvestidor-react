import useTheme from "@material-ui/core/styles/useTheme";
import { LOGGED_USER_ID, STATUS_TASK } from "_common/constants";
import MyTasksChartView from "./MyTasksChartView";

export default function MyTasksChart({ tasks }) {
  const theme = useTheme();

  const mytasks = tasks.filter((t) => t.responsible._id === LOGGED_USER_ID);
  const totalOpened = mytasks.filter((t) => t.status === STATUS_TASK.OPEN).length;
  const totalFinishedTasks = mytasks.filter((t) => t.status === STATUS_TASK.FINISHED).length;

  const option = {
    tooltip: {
      trigger: "item"
    },
    legend: {
      bottom: 0
    },
    series: [
      {
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center"
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "20",
            fontWeight: "bold"
          }
        },
        labelLine: {
          show: false
        },
        data: [
          {
            value: totalOpened,
            name: "Em Aberto",
            itemStyle: { color: theme.palette.primary.light }
          },
          {
            value: totalFinishedTasks,
            name: "Finalizadas",
            itemStyle: { color: theme.palette.success.light }
          }
        ]
      }
    ]
  };

  return <MyTasksChartView {...{ option }} />;
}
