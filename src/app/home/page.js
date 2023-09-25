"use client";

import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Typography';
import Typography from '@mui/material/Typography';
// import classes from './styles.module.css'
import { NoSsr } from '@mui/base/NoSsr';
import useStyles from './styles';
import styled from "styled-components";
import afeeniPhoto from '../../images/image00024.jpeg';
import Image from 'next/image'

//'../../images/image00024.jpeg';


const Wrapper = styled.section`
  padding: 9% 150px 5px;
  background: #FFF2DD;
`;



const Home2 = () => {
    const classes = useStyles();
    return (
    
/// materialUI styling causes the errors 
<NoSsr>
<div classname={classes.sectionDiv}>
       <Wrapper> 
<Grid className={classes.mainDiv} spacing={0} style={{boxShadow:"10px 10px 15px 5px pink, -10px -10px 15px 5px #dcd0ff"}}>
            <Grid className={classes.flexItem} >
                <h1 className={classes.title}>Afeeni Phillips</h1>
                <h2 className={classes.subtitle}>Web Developer</h2>
                <h2 className={classes.subtitle}>Technical Solutions</h2>
                <div className={classes.introSubtext}>
                <Typography> <FavoriteIcon /> Made with love and ReactJS</Typography>
                <Typography>View On Github</Typography>
                <Typography>LinkedIn</Typography>
            </div>
            </Grid>
            <Grid className={classes.flexItem}>
                <Image className={classes.largePhoto} src={afeeniPhoto} alt="Me" /> 
            </Grid>
            </Grid>

            </Wrapper>
    </div>
                </NoSsr>
    );
}
 
export default Home2