import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import { useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { TASK_STATUS } from '_common/constants/common.constants';

const TaskDialogView = ({ form, handleOnClose, responsibles }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Dialog fullWidth maxWidth="xs" open onClose={handleOnClose} {...{ fullScreen }}>
        <DialogTitle>Nova Tarefa</DialogTitle>
        <form onSubmit={form.handleSubmit} noValidate autoComplete="off">
          <DialogContent dividers>
            <Grid container direction="column" spacing={3}>
              <Grid item>
                <TextField
                  select
                  name="status"
                  label="Situação"
                  value={form.values.status}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  error={form.touched.status && !!form.errors.status}
                  helperText={form.touched.status && form.errors.status}>
                  <MenuItem value={TASK_STATUS.OPEN}>Em aberto</MenuItem>
                  <MenuItem value={TASK_STATUS.FINISHED}>Finalizada</MenuItem>
                </TextField>
              </Grid>
              <Grid item>
                <TextField
                  name="description"
                  label="Descrição"
                  value={form.values.description}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  error={form.touched.description && !!form.errors.description}
                  helperText={form.touched.description && form.errors.description}
                />
              </Grid>
              <Grid item>
                <TextField
                  select
                  name="responsible"
                  label="Responsável"
                  value={form.values.responsible}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  error={form.touched.responsible && !!form.errors.responsible}
                  helperText={form.touched.responsible && form.errors.responsible}>
                  {responsibles.map((responsible) => (
                    <MenuItem key={responsible._id} value={responsible._id}>
                      {responsible.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </DialogContent>

          <DialogActions>
            <Button color="default" onClick={handleOnClose}>
              Cancelar
            </Button>
            <Button autoFocus type="submit" disabled={form?.isSubmitting}>
              Salvar
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default TaskDialogView;
