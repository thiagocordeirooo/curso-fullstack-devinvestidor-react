import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Link, useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";

export default function MenuItemView({ item, open, handleClick }) {
  const { pathname } = useLocation();

  const { text, icon, path, items } = item;

  return (
    <>
      <ListItem
        key={text}
        button
        component={path ? Link : "li"}
        to={path}
        onClick={items ? handleClick : null}
        selected={pathname === path}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
        {items && (open ? <ExpandLess /> : <ExpandMore />)}
      </ListItem>
      {items && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {items.map((subItem, index) => (
              <MenuItem key={`subItem-${index}`} item={subItem} />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
}
