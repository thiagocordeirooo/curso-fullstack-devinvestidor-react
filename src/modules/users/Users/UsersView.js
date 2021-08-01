import Button from "@material-ui/core/Button";
import PageHeader from "_common/components/PageHeader";
import UserDialog from "./UserDialog";
import UsersFilter from "./UsersFilter";
import UsersTable from "./UsersTable";

export default function UsersView({ handleNew, userDialog }) {
  const buttonNew = <Button onClick={handleNew}>Novo</Button>;

  return (
    <>
      <PageHeader title="Usuários" actionButton={buttonNew} />
      <UsersFilter />
      <UsersTable />
      {userDialog.open && <UserDialog />}
    </>
  );
}
