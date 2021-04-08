import {
  Hidden,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from '@material-ui/icons/Notifications';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import { default as React } from 'react';


const useStyles = makeStyles((theme) => ({
  listItem: {
    paddingRight: theme.spacing(5),
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    color: 'white',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: {
    backgroundColor: theme.palette.primary
  }
}));



export default function Header() {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  function ListItemLink(props) {
    return <ListItem className={classes.listItem} button component="a" {...props} />;
  }

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <div className={classes.leftButtons}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.sectionMobile}
            >
              <MenuIcon />
            </IconButton>

            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={handleDrawerToggle}
            >
              <List component="nav">
                <ListItemLink button href="/">
                  <ListItemIcon>
                    <VerifiedUserIcon />
                  </ListItemIcon>
                  <ListItemText primary="Início" />
                </ListItemLink>

                <ListItemLink button href="/perfil">
                  <ListItemIcon>
                    <AccountCircle />
                  </ListItemIcon>
                  <ListItemText primary="Perfil" />
                </ListItemLink>
              </List>
            </Drawer>
          </div>

          <Link className={classes.title} href="/" noWrap>
            <Typography variant="h6" noWrap>
              <VerifiedUserIcon /> PDF Assinator Tabajara
            </Typography>
          </Link>

          <div className={classes.grow}></div>

          <nav className={classes.desktopButtons}>
            <Hidden xsUp>
              <IconButton aria-label="show new notifications" color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Hidden>
            <Hidden smDown>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Hidden>
          </nav>
        </Toolbar>
      </AppBar>
    </div>
  );
}