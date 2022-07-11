import React from "react";
import useStyles from "./styles";
import styled from "styled-components";
import DownloadIcon from '@mui/icons-material/Download';
import { Link } from "@mui/material";
import { Button } from "@mui/material";
import resume from '../../images/AfeeniPhillipsResume.pdf'
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



export default function Resume(){

const classes = useStyles();

const Wrapper = styled.section`
  padding: 1px 150px 140px;
  background: #dcd0ff;
`;


    return(

        <Wrapper id="resume">
        <h1>Resume</h1>
        <div className={classes.download}>
        <Document file={resume}>
        <Page pageNumber={1} className={classes.pdf}/>
        </Document>
        </div>
        < br />
        <div className={classes.download}>
        <Button  href={resume} target="_blank" download><DownloadIcon></DownloadIcon>  Download </Button>
        </div>
        </Wrapper>
        
        
        );


}