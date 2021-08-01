import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ReactECharts from "echarts-for-react";
import useStyles from "./TasksByResponsibleStyle";

export default function TasksByResponsibleView({ option }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" align="center" color="textSecondary">
        Tarefas por responsável
      </Typography>
      <ReactECharts {...{ option }} />
    </Paper>
  );
}
