import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DescriptionIcon from '@material-ui/icons/Description';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import CodeIcon from '@material-ui/icons/Code';


export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.flex}>
          <IconButton className={classes.menuButton} color="inherit" aria-label="menu">
            <PersonIcon className={classes.icon}/>
          </IconButton >
          <IconButton className={classes.menuButton}>
            <CodeIcon className={classes.icon}/>
          </IconButton>
          <IconButton className={classes.menuButton}>
            <DescriptionIcon className={classes.icon}/>
          </IconButton>
          <IconButton className={classes.menuButton}>
            <EmailIcon className={classes.icon}/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}