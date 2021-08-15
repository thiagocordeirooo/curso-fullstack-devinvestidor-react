import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CheckCircleOutlineOutlined from '@material-ui/icons/CheckCircleOutlineOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import clsx from 'clsx';
import MenuItem from './MenuItem';
import useStyles from './SidebarStyle';

const menu = [
  {
    text: 'Dashboard',
    icon: <DashboardOutlinedIcon />,
    path: '/dashboard'
  },
  {
    text: 'Usuários',
    icon: <PeopleAltOutlinedIcon />,
    path: '/usuarios'
  },
  {
    text: 'Tarefas',
    icon: <CheckCircleOutlineOutlined />,
    items: [
      {
        text: 'Minhas',
        path: '/tarefas/minhas'
      },
      {
        text: 'Em Aberto',
        path: '/tarefas/abertas'
      },
      {
        text: 'Finalizadas',
        path: '/tarefas/finalizadas'
      },
      {
        text: 'Todas',
        path: '/tarefas'
      }
    ]
  }
];

const SidebarView = ({ sidebarOpen }) => {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawer, {
          [classes.drawerOpen]: sidebarOpen,
          [classes.drawerClose]: !sidebarOpen
        })
      }}>
      <List>
        {menu.map((item, index) => (
          <MenuItem key={index} {...{ item }} />
        ))}
      </List>
    </Drawer>
  );
};

export default SidebarView;
