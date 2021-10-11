import React from 'react';
import useStyles from './styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from "styled-components";

export default function Code() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const Wrapper = styled.section`
  padding: 160px 150px 5px;
  background: pink;
  opacity: 0.75;
`;  


  return (
    <div>
      <Wrapper>
        <div>
    <Card className={classes.root} style={{boxShadow:"10px 10px 15px 5px #dcd0ff, -10px -10px 15px 5px pink"}}>
      <CardContent>
 <img src="https://inbeautycosmetics.com/wp-content/uploads/2020/06/inbeautynewpink.png" style={{height: '80px', width: '80px'}} />
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
    </Wrapper>
    </div>
  );
}
