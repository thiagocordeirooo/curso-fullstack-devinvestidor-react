import { useContext } from "react";
import TasksView from "./TasksView";
import { TasksContext } from "./context/TasksContext";

export default function Tasks() {
  const { taskDialog, setTaskDialog } = useContext(TasksContext);

  const handleNew = () => setTaskDialog({ open: true });

  return <TasksView {...{ handleNew, taskDialog }} />;
}
