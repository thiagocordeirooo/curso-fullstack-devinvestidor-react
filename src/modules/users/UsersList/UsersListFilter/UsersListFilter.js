import { useContext, useEffect, useState } from 'react';
import useDebounce from '_common/hooks/useDebounce';
import { UsersListContext } from '../context/UsersListContext';
import UsersListFilterView from './UsersListFilterView';

const UsersListFilter = () => {
  const { setFilter } = useContext(UsersListContext);

  const [searchTerm, setSerachTerm] = useState('');

  const debouncedSearchTerm = useDebounce(searchTerm);

  const handleChangeSearchTerm = (event) => setSerachTerm(event.target.value);

  useEffect(() => {
    setFilter(debouncedSearchTerm);
  }, [debouncedSearchTerm, setFilter]);

  return <UsersListFilterView {...{ handleChangeSearchTerm }} />;
};

export default UsersListFilter;
