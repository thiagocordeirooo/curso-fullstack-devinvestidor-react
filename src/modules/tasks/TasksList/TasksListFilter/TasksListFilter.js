import { useContext, useEffect, useState } from 'react';
import useDebounce from '_common/hooks/useDebounce';
import { TaskListContext } from '../context/TaskListContext';
import TasksListFilterView from './TasksListFilterView';

const TasksListFilter = () => {
  const { setFilter } = useContext(TaskListContext);

  const [searchTerm, setSerachTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm);

  const handleChangeSearchTerm = (event) => setSerachTerm(event.target.value);

  useEffect(() => {
    setFilter(debouncedSearchTerm);
  }, [debouncedSearchTerm, setFilter]);

  return <TasksListFilterView {...{ handleChangeSearchTerm }} />;
};

export default TasksListFilter;
