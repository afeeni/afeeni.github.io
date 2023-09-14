import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Typography';
import Typography from '@mui/material/Typography';
import classes from './styles.module.css'

function Home() {
    return (
    
                
           <Grid className={classes.mainDiv} style={{boxShadow:"10px 10px 15px 5px pink, -10px -10px 15px 5px #dcd0ff"}}>
                    <Grid className={classes.flexItem}>
                        <div className={classes.title}>Afeeni Phillips</div>
                        <div className={classes.subtitle}>Web Developer</div>
                        <div className={classes.subtitle}>Technical Solutions</div>
                            <div className={classes.introSubtext}>
                                <Typography> 
                                {/* add space here */}
                                     <FavoriteIcon /> Made with love and ReactJS 
                                     View on GitHub (the first link here) 
                                    LinkedIn (the second link here) 
                                </Typography>
                            </div>   
                </Grid>
                        <Grid className={classes.flexItem}>
                <div className={classes.largePhoto}> the photo would go here </div> 
            </Grid>      
                </Grid>


    );
}
 
export default Home;