import ConfirmationDialog from '_common/components/ConfirmationDialog';
import PageHeader from '_common/components/PageHeader';
import EmptyBox from '_common/lotties/EmptyBox';
import LoadingSpinner from '_common/lotties/LoadingSpinner';

const DashboardView = () => {
  return (
    <>
      <PageHeader title="Dashboard" />
      <EmptyBox />
      <LoadingSpinner />
      <ConfirmationDialog
        title="Confirmação"
        text="Tem certeza disso?"
        handleClose={() => {}}
        handleConfirmation={() => alert('Confirmou!')}
      />
    </>
  );
};

export default DashboardView;
