import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useStyles from './styles';
import Image from 'next/image'

const Home = () => {
    const afeeniPhoto = 'images/image00024.jpeg';
    const classes = useStyles();
        return (
                <div className={classes.sectionDiv}>
                        <Grid container spacing={0} className={classes.mainDiv}>
                            <Grid item xs={7} className={classes.flexItem}>
                                <div className={classes.center}>
                                <h1 className={classes.title}>Afeeni Phillips</h1>
                                <h2 className={classes.subtitle}>Web Developer</h2>
                                <h2 className={classes.subtitle}>Technical Solutions</h2>
                                </div>
                                    <div className={classes.introSubtext}>
                                        <Typography> Made with ReactJS, Next.js, MUI, and love <FavoriteIcon sx={{ "& :hover": { color: "#ff80ed" }}}/></Typography>
                                        <Typography>View On Github</Typography>
                                        <Typography>LinkedIn</Typography>
                                    </div>
                            </Grid>
                            <Grid item xs={5} className={classes.flexItem}> 
                           {/* photo looks squished, change dimensions? */}
                                <img className={classes.largePhoto} src={afeeniPhoto} alt="Me" /> 
                            </Grid>
                        </Grid>
                </div>
    );
}
 
export default Home