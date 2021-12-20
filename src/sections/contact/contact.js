import React from "react";
import useStyles from "./styles";
import styled from "styled-components";
import { HashLink, NavHashLink } from 'react-router-hash-link';


export default function Contact(){


const classes = useStyles();

const Wrapper = styled.section`
  padding: 1px 150px 140px;
  background: #E0F8D1;
`;


    return(

        <Wrapper id="contact">
        <h1>Contact Me</h1>


        </Wrapper>
        
        
        );


}