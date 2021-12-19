import React from 'react';
import useStyles from './styles';
import styled from "styled-components";
import headshot from '../../images/headshot.jpg'
import { Link } from '@material-ui/core';

function About() {

  const classes = useStyles()
  const Wrapper = styled.section`
  padding: 20px 150px 140px;
  background: #d4ebf2;
`;  


  return (
    <div>
        <Wrapper id="about">
        <h1>About Me</h1>
        <img className={classes.headshot} src={headshot}/>
        <p className={classes.text}>Hi! My name is Afeeni Phillips & I’d like to welcome you to my development portfolio. I created this website using React in order to showcase my work. It’s designed to showcase who am I along with the work that I have to offer. You can view the <Link href="https://github.com/aphillips24/aphillips24.github.io" target="_blank"> GitHub repository here</Link>. In this portfolio, you can view projects I’ve created using various technologies.</p>
        <p className={classes.text}> I am a Howard University graduate (HU!!!) with a B.B.A in Computer Information Systems. I have been a freelance and professional frontend developer for over 4 years now. I have always been dedicated to learning new technical skills and will forever be interested in all things tech!</p>
        <p className={classes.text}> My <Link href="https://www.linkedin.com/in/afeeniphillips/" target="_blank">LinkedIn</Link> page or <Link to="resume">resume</Link> may be able to give you more insight into my technical skills and expertise. I am open to being contacted about opportunities. </p>
        <span className={classes.bottomSpace} />
        </Wrapper>
    </div>
  );
}


export default About;
