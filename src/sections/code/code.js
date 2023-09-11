import React from 'react';
import useStyles from './styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from "styled-components";
import { Link } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { typography } from '@mui/system';
import { Container, Col, Row } from 'react-bootstrap';
import pers from '../../images/af-pers.png'

export default function Code() {
  const classes = useStyles();
  ///const bull = <span className={classes.bullet}>•</span>;
  const Wrapper = styled.section`
  padding: 40px 150px 140px;
  background: #ffd0d6;
`;  


  return (
    <div>
      <Wrapper>
        <h1> Projects </h1>
        <div>

          <h2> Under Construction :)</h2>
        {/* <Grid container spacing={2}>
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
</Grid> */}
    </div>
    
    </Wrapper>
    </div>
  );
}
