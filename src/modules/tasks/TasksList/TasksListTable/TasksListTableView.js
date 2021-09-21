import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import { TASK_STATUS } from '_common/constants/common.constants';
import EmptyBox from '_common/lotties/EmptyBox';
import LoadingSpinner from '_common/lotties/LoadingSpinner';
import useStyles from './TasksListTableStyle';

const TasksListTableView = ({ tasks, handleEdit }) => {
  const classes = useStyles();

  const renderStatusChip = (status) => {
    switch (status) {
      case TASK_STATUS.OPEN:
        return <Chip size="small" label="Aberta" color="primary" />;
      default:
        return <Chip size="small" label="Fechada" />;
    }
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Situação</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell>Responsável</TableCell>
              <TableCell width="150" align="center">
                Ações
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks &&
              tasks.map((task) => (
                <TableRow key={task._id} hover>
                  <TableCell>{renderStatusChip(task.status)}</TableCell>
                  <TableCell>{task.description}</TableCell>
                  <TableCell>{task.responsible.name}</TableCell>
                  <TableCell padding="none" align="right">
                    <IconButton onClick={() => handleEdit(task)}>
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {!tasks && <LoadingSpinner />}
      {tasks && !tasks.length && <EmptyBox />}
    </>
  );
};

export default TasksListTableView;
