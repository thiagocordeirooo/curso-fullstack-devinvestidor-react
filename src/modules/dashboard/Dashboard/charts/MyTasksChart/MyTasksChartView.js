import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ReactECharts from "echarts-for-react";
import useStyles from "./MyTasksChartStyle";

export default function MyTasksChartView({ option }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" align="center" color="textSecondary">
        Minhas Tarefas
      </Typography>
      <ReactECharts {...{ option }} />
    </Paper>
  );
}
