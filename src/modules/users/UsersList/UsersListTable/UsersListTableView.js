import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ConfirmationDialog from '_common/components/ConfirmationDialog';
import EmptyBox from '_common/lotties/EmptyBox';
import LoadingSpinner from '_common/lotties/LoadingSpinner';
import useStyles from './UsersListTableStyle';

const UsersListTableView = ({ users, handleEdit, userDelete, setUserDelete, handleDeleteConfirmation }) => {
  const classes = useStyles();

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>E-mail</TableCell>
              <TableCell width="150" align="center">
                Ações
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users.map((user) => (
                <TableRow key={user._id} hover>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell padding="none" align="right">
                    <IconButton onClick={() => handleEdit(user)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => setUserDelete(user)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {!users && <LoadingSpinner />}
      {users && !users.length && <EmptyBox />}
      {userDelete && (
        <ConfirmationDialog
          title="Excluir Usuário"
          text={`Tem certeza que deseja excluir o usuário ${userDelete.name}?`}
          handleClose={() => setUserDelete(null)}
          handleConfirmation={handleDeleteConfirmation}
        />
      )}
    </>
  );
};

export default UsersListTableView;
