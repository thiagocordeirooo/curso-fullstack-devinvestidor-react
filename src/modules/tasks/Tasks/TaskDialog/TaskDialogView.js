import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import { useTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { STATUS_TASK } from "_common/constants";
import formatDate from "_common/utils/formatDate";

export default function TaskDialogView({ open, handleClose, form, responsibles }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog fullWidth maxWidth="xs" onClose={handleClose} {...{ open, fullScreen }}>
      <DialogTitle>{`${form.values._id ? "Editar" : "Nova"} Tarefa`}</DialogTitle>
      <form onSubmit={form.handleSubmit} noValidate autoComplete="off">
        <DialogContent dividers>
          <Grid container direction="column" spacing={3}>
            <Grid item>
              <TextField
                select
                label="Status"
                id="status"
                name="status"
                value={form.values.status}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                error={form.touched.status && !!form.errors.status}
                helperText={form.touched.status && form.errors.status}>
                <MenuItem value={STATUS_TASK.OPEN}>Em aberto</MenuItem>
                <MenuItem value={STATUS_TASK.FINISHED}>Finalizada</MenuItem>
              </TextField>
            </Grid>
            <Grid item>
              <TextField
                label="Descrição"
                id="description"
                name="description"
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
                label="Responsável"
                id="responsible"
                name="responsible"
                value={form.values.responsible}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                error={form.touched.responsible && !!form.errors.responsible}
                helperText={form.touched.responsible && form.errors.responsible}>
                {responsibles.map((resp) => (
                  <MenuItem value={resp._id}>{resp.name}</MenuItem>
                ))}
              </TextField>
            </Grid>
            {form.values.creation && (
              <Grid item>
                <TextField disabled label="Data Criação" value={formatDate(new Date(form.values.creation))} />
              </Grid>
            )}
            {form.values.concluded && (
              <Grid item>
                <TextField disabled label="Data conclusão" value={formatDate(new Date(form.values.concluded))} />
              </Grid>
            )}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button color="default" onClick={handleClose}>
            Cancelar
          </Button>
          <Button color="primary" autoFocus type="submit" disabled={form.isSubmitting}>
            Salvar
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
