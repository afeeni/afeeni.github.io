import React from 'react';
import afeeniPhoto from '../../images/image00024.jpeg';
import useStyles from './styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import styled from "styled-components";


export default function Home(){
const classes = useStyles();

const Wrapper = styled.section`
  padding: 9% 150px 5px;
  background: #FFF2DD;
`;

return(

    <div classname={classes.sectionDiv}>
       <Wrapper> 
        {/* <h1> Under construction! Sorry for the mess! </h1>
        <h3> But feel free to look around :) </h3> */}
        <Grid container className={classes.mainDiv} spacing={0} style={{boxShadow:"10px 10px 15px 5px pink, -10px -10px 15px 5px #dcd0ff"}}>
            <Grid item xs={7} className={classes.flexItem}>
                <h1 className={classes.title}>Afeeni Phillips</h1>
                <h2 className={classes.subtitle}>Web Developer</h2>
                <div className={classes.introSubtext}>
                <Typography> <FavoriteIcon /> Made with love and ReactJS </Typography>
                <Typography>
                <Link href="https://github.com/aphillips24/aphillips24.github.io" target="_blank"> View on GitHub </Link>
                <Typography>
                <Link href="https://www.linkedin.com/in/afeeniphillips/" target="_blank">LinkedIn</Link>
                </Typography>
                </Typography>
                </div>
            </Grid>
            <Grid item xs={5} className={classes.flexItem}>
                <img className={classes.largePhoto} src={afeeniPhoto} alt="Me" /> 
            </Grid>
        </Grid>
         </Wrapper>
    </div>

    

        );
    }
