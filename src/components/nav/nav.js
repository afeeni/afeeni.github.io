'use client'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import useStyles from './styles';
import DescriptionIcon from '@mui/icons-material/Description';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code';
import HomeIcon from '@mui/icons-material/Home';
import { NoSsr, Tooltip, Box } from '@mui/material';
import Link from 'next/link';

// add smooth scroll effect


const ButtonAppBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.nav}>
      <AppBar position="static" className={classes.appBar} >
       <Toolbar className={classes.flex}>
          <Tooltip title="Home">
          <Link href="/#home">
          <IconButton className={classes.menuButton}>
          <HomeIcon className={classes.icon}/>
          </IconButton >
          </Link>
          </Tooltip>
          <Tooltip title="About Me">
          <Link href="/#about">
          <IconButton className={classes.menuButton}>
          <PersonIcon className={classes.icon}/>
          </IconButton >
          </Link>
          </Tooltip>
          <Tooltip title="Projects">
          <Link href="/#code">
           <IconButton className={classes.menuButton}>
            <CodeIcon className={classes.icon}/>
          </IconButton>
          </Link>
          </Tooltip>
          <Tooltip title="Resume">
          <Link href="/#resume">
          <IconButton className={classes.menuButton}>
            <DescriptionIcon className={classes.icon}/>
          </IconButton>
          </Link>
          </Tooltip>
          <Tooltip title="Contact Me">
          <Link href="/#contact">
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

export default ButtonAppBar;