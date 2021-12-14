import React from "react";
import useStyles from "./styles";
import styled from "styled-components";
import DownloadIcon from '@mui/icons-material/Download';
import { Link } from "@mui/material";
import { Button } from "@mui/material";
import resume from '../../images/AfeeniPhillipsResume.pdf'





export default function Resume(){

const classes = useStyles();

const Wrapper = styled.section`
  padding: 9% 150px 140px;
  background: #dcd0ff;
`;


    return(

        <Wrapper>
        <h1>Resume</h1>
        <Button className={classes.download} href={resume} target="_blank" download><DownloadIcon></DownloadIcon>  Download </Button>
        </Wrapper>
        
        
        );


}