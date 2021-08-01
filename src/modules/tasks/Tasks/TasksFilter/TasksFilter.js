import { useContext, useEffect, useState } from "react";
import useDebounce from "_common/hooks/useDebounce";
import { TasksContext } from "../context/TasksContext";
import TasksFilterView from "./TasksFilterView";

export default function TasksFilter() {
  const { setFilter: setFilterContext } = useContext(TasksContext);

  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm);

  const handleChangeSearchTerm = (event) => setSearchTerm(event.target.value);

  useEffect(() => {
    setFilterContext(debouncedSearchTerm);
  }, [debouncedSearchTerm, setFilterContext]);

  return <TasksFilterView {...{ handleChangeSearchTerm }} />;
}
