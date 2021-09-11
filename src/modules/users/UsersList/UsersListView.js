import Button from '@material-ui/core/Button';
import PageHeader from '_common/components/PageHeader';
import UsersListFilter from './UsersListFilter';
import UsersListTable from './UsersListTable';

const UsersListView = () => {
  const newButton = <Button>Novo</Button>;

  return (
    <>
      <PageHeader title="Usuários" actionButton={newButton} />
      <UsersListFilter />
      <UsersListTable />
    </>
  );
};

export default UsersListView;
