import { TextField } from '@material-ui/core';
import useStyles from './TasksListFilterStyle';

const TasksListFilterView = ({ handleChangeSearchTerm }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField placeholder="Pesquise por descrição ou responsável" onChange={handleChangeSearchTerm} />
    </div>
  );
};

export default TasksListFilterView;
