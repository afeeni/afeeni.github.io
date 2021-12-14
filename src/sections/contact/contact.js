import React from "react";
import useStyles from "./styles";
import styled from "styled-components";



export default function Contact(){


const classes = useStyles();

const Wrapper = styled.section`
  padding: 9% 150px 140px;
  background: #E0F8D1;
`;


    return(

        <Wrapper>
        <h1>Contact Me</h1>


        </Wrapper>
        
        
        );


}