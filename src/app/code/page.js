import useStyles from './styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Code() {

  const classes = useStyles();
  const pers = '/images/af-pers.png';

  return (
    <div className={classes.section}>
        <h1> Projects </h1>
        <div>
        <Grid container spacing={2}>
        <Grid item xs={6} className={classes.flexItem}>
    <Card className={classes.root} style={{boxShadow:"10px 10px 15px 5px #dcd0ff, -10px -10px 15px 5px pink"}}>
      <CardContent>
 <img src="https://inbeautycosmetics.com/wp-content/uploads/2020/06/inbeautynewpink.png" style={{height: '150px', width: '250px', paddingBottom: '12px'}} />
 <Typography className={classes.typ}>E-Commerce Website</Typography>
 <Typography className={classes.typ}>Made using WordPress</Typography>
      </CardContent>
      <CardActions>
        <Link href="https://inbeautycosmetics.com/" target="_blank">
        <Button size="small">View</Button>
        </Link>
      </CardActions>
    </Card>
</Grid>
<Grid item xs={6} className={classes.flexItem}>
<Card className={classes.root} style={{boxShadow:"10px 10px 15px 5px #dcd0ff, -10px -10px 15px 5px pink"}}>
      <CardContent>
 <img src={pers} style={{height: '150px', width: '250px', paddingBottom: '12px'}} />
 <Typography className={classes.typ}>Personal Website</Typography>
 <Typography className={classes.typ}>Made using Wix</Typography>
      </CardContent>
      <CardActions>
        <Link href="https://www.afeeni.com/" target="_blank">
        <Button size="small">View</Button>
        </Link>
      </CardActions>
    </Card>
</Grid>
</Grid>
    </div>
    </div>
  );
}