import useStyles from "./styles";
import DownloadIcon from '@mui/icons-material/Download';
import { Button } from "@mui/material";

import dynamic from 'next/dynamic';


// ifram alternative

export default function Resume(){

    const FileViewer = dynamic(() => import('react-file-viewer'), {
        ssr: false
    });   

const resume = 'images/AfeeniWebResume.pdf'

const classes = useStyles();
    return(
        <div className={classes.section}>
        <h1>Resume</h1>
        <div className={classes.iframe}>
        <FileViewer fileType="pdf" filePath={resume} />
        {/* <iframe className={classes.iframe} src={resume}/> */}
        </div>
        < br />
        <div className={classes.rs}>
        <Button  href={resume} target="_blank" download><DownloadIcon></DownloadIcon>  Download </Button>
        </div>
        </div>
    );
}