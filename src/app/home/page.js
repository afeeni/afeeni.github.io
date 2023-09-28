"use client";

import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { NoSsr } from '@mui/base/NoSsr';
import useStyles from './styles';
import styled from "styled-components";
import afeeniPhoto from '../../images/image00024.jpeg';
import Image from 'next/image'


const Wrapper = styled.section`
  padding: 9% 150px 5px;
  background: #FFF2DD;
`;


const Home2 = () => {
    const classes = useStyles();
    return (


<NoSsr>
    <div classname={classes.sectionDiv}>
       <Wrapper> 
            <Grid container spacing={0} className={classes.mainDiv}>
                <Grid item xs={7} className={classes.flexItem}>
                    <div className={classes.center}>
                    <h1 className={classes.title}>Afeeni Phillips</h1>
                    <h2 className={classes.subtitle}>Web Developer</h2>
                    <h2 className={classes.subtitle}>Technical Solutions</h2>
                    </div>
                        <div className={classes.introSubtext}>
                            <Typography> <FavoriteIcon /> Made with love and ReactJS</Typography>
                            <Typography>View On Github</Typography>
                            <Typography>LinkedIn</Typography>
                        </div>
                </Grid>
                <Grid item xs={5} className={classes.flexItem}>
                    <Image className={classes.largePhoto} src={afeeniPhoto} alt="Me" /> 
                </Grid>
            </Grid>
        </Wrapper>
    </div>
</NoSsr>

    );
}
 
export default Home2