import TextField from "@material-ui/core/TextField";
import useStyles from "./UsersFilterStyle";

export default function UsersFilterView({ handleChangeSearchTerm }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField placeholder="Digite para buscar por nome ou e-mail" onChange={handleChangeSearchTerm} />
    </div>
  );
}
