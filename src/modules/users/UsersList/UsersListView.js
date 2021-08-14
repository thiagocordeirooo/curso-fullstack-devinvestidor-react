import Button from '@material-ui/core/Button';

const { default: PageHeader } = require('_common/components/PageHeader');

const UsersListView = () => {
  const newButton = <Button>Novo</Button>;

  return (
    <>
      <PageHeader title="Usuários" actionButton={newButton} />
    </>
  );
};

export default UsersListView;
