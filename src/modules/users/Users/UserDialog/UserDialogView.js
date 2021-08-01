import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import formatDate from "_common/utils/formatDate";

export default function UserDialogView({ open, handleClose, form }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog fullWidth maxWidth="xs" onClose={handleClose} {...{ open, fullScreen }}>
      <DialogTitle>{`${form.values._id ? "Editar" : "Novo"} Usuário`}</DialogTitle>
      <form onSubmit={form.handleSubmit} noValidate autoComplete="off">
        <DialogContent dividers>
          <Grid container direction="column" spacing={3}>
            <Grid item>
              <TextField
                label="Nome"
                id="name"
                name="name"
                value={form.values.name}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                error={form.touched.name && !!form.errors.name}
                helperText={form.touched.name && form.errors.name}
              />
            </Grid>
            <Grid item>
              <TextField
                label="E-mail"
                id="email"
                name="email"
                value={form.values.email}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                error={form.touched.email && !!form.errors.email}
                helperText={form.touched.email && form.errors.email}
              />
            </Grid>
            <Grid item>
              <TextField
                type="password"
                label="Senha"
                id="password"
                name="password"
                value={form.values.password}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                error={form.touched.password && !!form.errors.password}
                helperText={form.touched.password && form.errors.password}
              />
            </Grid>
            {form.values.creation && (
              <Grid item>
                <TextField disabled label="Data Criação" value={formatDate(new Date(form.values.creation))} />
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
