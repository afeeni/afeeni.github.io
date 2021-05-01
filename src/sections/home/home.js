import React from 'react';
import afeeniPhoto from '../../images/image00024.jpeg';
import useStyles from './styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


export default function Home(){
const classes = useStyles();

return(
    <div>
        <Grid container className={classes.mainDiv} spacing={0}>
            <Grid item xs={7} className={classes.flexItem}>
                <h1 className={classes.title}>Afeeni Phillips</h1>
                <h2 className={classes.subtitle}>Web & Brand Development</h2>
                <div className={classes.introSubtext}>
                <Typography> <FavoriteIcon /> Made with love and React </Typography>
                <Typography>
                <Link href="https://github.com/aphillips24/Afeeni-Web" target="_blank"> View on GitHub </Link>
                </Typography>
                </div>
            </Grid>
            <Grid item xs={5} className={classes.flexItem}>
                <img className={classes.largePhoto} src={afeeniPhoto} alt="Me" /> 
            </Grid>

        </Grid>
    </div>

        );
    }
