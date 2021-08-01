import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";

const SnackbarView = ({ open, message, handleClose }) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center"
      }}
      open={open}
      autoHideDuration={4000}
      onClose={handleClose}
      message={<Typography>{message}</Typography>}
      action={
        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
          <CloseIcon fontSize="small" />
        </IconButton>
      }
    />
  );
};

export default SnackbarView;
