import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import useStyles from './styles';
import DescriptionIcon from '@material-ui/icons/Description';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import CodeIcon from '@material-ui/icons/Code';
import HomeIcon from '@material-ui/icons/Home';
import { Tooltip } from '@material-ui/core';
import { HashLink as Link } from 'react-router-hash-link';


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
        <Tooltip title="Home">
          <Link smooth to="/#home">
          <IconButton className={classes.menuButton}>
          <HomeIcon className={classes.icon}/>
          </IconButton >
          </Link>
          </Tooltip>
          <Tooltip title="About Me">
          <Link smooth to="/#about">
          <IconButton className={classes.menuButton}>
          <PersonIcon className={classes.icon}/>
          </IconButton >
          </Link>
          </Tooltip>
          <Tooltip title="Projects">
          <Link smooth to="/#code">
           <IconButton className={classes.menuButton}>
            <CodeIcon className={classes.icon}/>
          </IconButton>
          </Link>
          </Tooltip>
          <Tooltip title="Resume">
          <Link smooth to="/#resume">
          <IconButton className={classes.menuButton}>
            <DescriptionIcon className={classes.icon}/>
          </IconButton>
          </Link>
          </Tooltip>
          <Tooltip title="Contact Me">
          <Link smooth to="/#contact">
          <IconButton className={classes.menuButton}>
            <EmailIcon className={classes.icon}/>
          </IconButton> 
          </Link>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  );
}