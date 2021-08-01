import { createContext, memo, useState } from "react";

export const TasksContext = createContext(null);
TasksContext.displayName = "TasksContext";

export const TasksContextProvider = memo(({ children }) => {
  const [tasks, setTasks] = useState(null);
  const [filter, setFilter] = useState("");
  const [taskDialog, setTaskDialog] = useState({ open: false });

  return (
    <TasksContext.Provider value={{ tasks, setTasks, filter, setFilter, taskDialog, setTaskDialog }}>{children}</TasksContext.Provider>
  );
});
