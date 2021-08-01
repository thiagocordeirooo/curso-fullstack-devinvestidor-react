import ConfirmationDialogView from "./ConfirmationDialogView";

export default function ConfirmationDialog({ title, text, handleClose, handleConfirmation }) {
  return <ConfirmationDialogView {...{ title, text, handleClose, handleConfirmation }} />;
}
