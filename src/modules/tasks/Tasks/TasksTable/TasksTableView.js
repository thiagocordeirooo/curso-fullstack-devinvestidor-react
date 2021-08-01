import Chip from "@material-ui/core/Chip";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ConfirmationDialog from "_common/components/ConfirmationDialog";
import EmptyBox from "_common/components/EmptyBox";
import LoadingSpinner from "_common/components/LoadingSpinner";
import useStyles from "./TasksTableStyle";

export default function TasksTableView({ tasks, handleEdit, taskDelete, setTaskDelete, handleDeleteConfirmation }) {
  const classes = useStyles();

  const renderStatus = (status) => {
    switch (status) {
      case "OPEN":
        return <Chip size="small" label="Aberta" color="primary" />;
      default:
        return <Chip size="small" label="Fechada" />;
    }
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell width="150">Status</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell width="250">Responsável</TableCell>
              <TableCell align="center" width="100">
                Ações
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks &&
              tasks.map((task) => (
                <TableRow key={task._id} hover>
                  <TableCell padding="none" className={classes.collumnStatus}>
                    {renderStatus(task?.status)}
                  </TableCell>
                  <TableCell>{task?.description}</TableCell>
                  <TableCell>{task?.responsible?.name}</TableCell>
                  <TableCell padding="none" align="right">
                    <IconButton onClick={() => handleEdit(task)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => setTaskDelete(task)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {!tasks && <LoadingSpinner />}
      {tasks && !tasks.length && <EmptyBox />}
      {taskDelete && (
        <ConfirmationDialog
          title="Excluir Tarefa"
          text={`Tem certeza que deseja excluir a tarefa ${taskDelete.description}?`}
          handleClose={() => setTaskDelete(null)}
          handleConfirmation={handleDeleteConfirmation}
        />
      )}
    </>
  );
}
