import { useContext, useEffect, useState } from "react";
import useDebounce from "_common/hooks/useDebounce";
import { UsersContext } from "../context/UsersContext";
import UsersFilterView from "./UsersFilterView";

export default function UsersFilter() {
  const { setFilter: setFilterContext } = useContext(UsersContext);

  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm);

  const handleChangeSearchTerm = (event) => setSearchTerm(event.target.value);

  useEffect(() => {
    setFilterContext(debouncedSearchTerm);
  }, [debouncedSearchTerm, setFilterContext]);

  return <UsersFilterView {...{ handleChangeSearchTerm }} />;
}
