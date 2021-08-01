import useTheme from "@material-ui/core/styles/useTheme";
import { STATUS_TASK } from "_common/constants";
import TasksByResponsibleView from "./TasksByResponsibleView";

export default function TasksByResponsible({ tasks }) {
  const theme = useTheme();

  const dataOpened = [];
  const dataFinished = [];

  const ids = [...new Set(tasks.map((task) => task.responsible._id))];
  ids.forEach((id) => {
    dataOpened.push(tasks.filter((task) => task.status === STATUS_TASK.OPEN && task.responsible._id === id).length);
    dataFinished.push(tasks.filter((task) => task.status === STATUS_TASK.FINISHED && task.responsible._id === id).length);
  });

  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow"
      }
    },
    legend: {
      data: ["Em Aberto", "Finalizadas"],
      bottom: 0
    },
    grid: {
      bottom: "15%",
      containLabel: true
    },
    xAxis: {
      type: "value",
      boundaryGap: [0, 0.01]
    },
    yAxis: { type: "category", data: [...new Set(tasks.map((task) => task.responsible.name))] },
    series: [
      {
        name: "Em Aberto",
        type: "bar",
        data: dataOpened,
        color: theme.palette.primary.light
      },
      {
        name: "Finalizadas",
        type: "bar",
        data: dataFinished,
        color: theme.palette.success.light
      }
    ]
  };

  return <TasksByResponsibleView {...{ option }} />;
}
