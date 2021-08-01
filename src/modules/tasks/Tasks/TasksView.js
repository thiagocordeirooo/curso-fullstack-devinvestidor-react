import Button from "@material-ui/core/Button";
import PageHeader from "_common/components/PageHeader";
import TaskDialog from "./TaskDialog";
import TasksFilter from "./TasksFilter";
import TasksTable from "./TasksTable";

export default function TasksView({ handleNew, taskDialog }) {
  const buttonNew = <Button onClick={handleNew}>Nova</Button>;

  return (
    <>
      <PageHeader title="Tarefas" actionButton={buttonNew} />
      <TasksFilter />
      <TasksTable />
      {taskDialog.open && <TaskDialog />}
    </>
  );
}
