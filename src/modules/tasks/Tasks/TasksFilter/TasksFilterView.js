import TextField from "@material-ui/core/TextField";
import useStyles from "./TasksFilterStyle";

export default function TasksFilterView({ handleChangeSearchTerm }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField placeholder="Digite para buscar por status, descrição ou responsável" onChange={handleChangeSearchTerm} />
    </div>
  );
}
