import Button from '@material-ui/core/Button';
import PageHeader from '_common/components/PageHeader';

const TasksListView = () => {
  const newButton = <Button>Nova</Button>;

  return (
    <>
      <PageHeader title="Tarefas" actionButton={newButton} />
    </>
  );
};

export default TasksListView;
