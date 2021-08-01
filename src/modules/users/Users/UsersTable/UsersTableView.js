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

export default function UsersTableView({ users, handleEdit, setUserDelete, userDelete, handleDeleteConfirmation }) {
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>E-mail</TableCell>
              <TableCell align="center" width="100">
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
}
