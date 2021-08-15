import ConfirmationDialogView from './ConfirmationDialogView';

const ConfirmationDialog = ({ title, text, handleClose, handleConfirmation }) => {
  return <ConfirmationDialogView {...{ title, text, handleClose, handleConfirmation }} />;
};

export default ConfirmationDialog;
