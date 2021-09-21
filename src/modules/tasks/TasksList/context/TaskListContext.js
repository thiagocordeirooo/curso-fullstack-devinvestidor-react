import { createContext, memo, useState } from 'react';

export const TaskListContext = createContext(null);
TaskListContext.displayName = 'TaskListContext';

export const TaskListContextProvider = memo(({ children }) => {
  const [tasks, setTasks] = useState(null);
  const [filter, setFilter] = useState(null);

  const [taskDialog, setTaskDialog] = useState({ open: false });

  return (
    <TaskListContext.Provider value={{ tasks, setTasks, filter, setFilter, taskDialog, setTaskDialog }}>
      {children}
    </TaskListContext.Provider>
  );
});
