import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './styles';
import DescriptionIcon from '@material-ui/icons/Description';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import CodeIcon from '@material-ui/icons/Code';
import { Tooltip } from '@material-ui/core';


export default function ButtonAppBar() {
  const classes = useStyles();
  // const icons = [ <PersonIcon className={classes.icon} />, 
  //                 <CodeIcon className={classes.icon} />, 
  //                 <DescriptionIcon className={classes.icon} />, 
  //                 <EmailIcon className={classes.icon} /> ]

  //  const navbarItems =  [
  //   {id: 0, title: "About Me", Icon: "PersonIcon"}
  // ]

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.flex}>
          <Tooltip title="About Me">
          <IconButton className={classes.menuButton}>
          <PersonIcon className={classes.icon}/>
          </IconButton >
          </Tooltip>
          <Tooltip title="Projects">
           <IconButton className={classes.menuButton}>
            <CodeIcon className={classes.icon}/>
          </IconButton>
          </Tooltip>
          <Tooltip title="Resume">
          <IconButton className={classes.menuButton}>
            <DescriptionIcon className={classes.icon}/>
          </IconButton>
          </Tooltip>
          <Tooltip title="Contact Me">
          <IconButton className={classes.menuButton}>
            <EmailIcon className={classes.icon}/>
          </IconButton> 
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  );
}