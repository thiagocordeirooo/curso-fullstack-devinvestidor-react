import MenuItemView from './MenuItemView';
import { useState } from 'react';

const MenuItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

  return <MenuItemView {...{ item, open, handleClick }} />;
};

export default MenuItem;
