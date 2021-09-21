import Button from '@material-ui/core/Button';
import PageHeader from '_common/components/PageHeader';
import TasksListFilter from './TasksListFilter';
import TasksListTable from './TasksListTable';

const TasksListView = () => {
  const newButton = <Button>Nova</Button>;

  return (
    <>
      <PageHeader title="Tarefas" actionButton={newButton} />
      <TasksListFilter />
      <TasksListTable />
    </>
  );
};

export default TasksListView;
