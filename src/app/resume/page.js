import useStyles from "./styles";
import DownloadIcon from '@mui/icons-material/Download';
import { Button } from "@mui/material";
import FileViewer from "react-file-viewer";


export default function Resume(){

const resume = '/AfeeniWebResume.pdf'

const classes = useStyles();
    return(
        <div className={classes.section}>
        <h1>Resume</h1>
        <div className={classes.download}>
        <FileViewer fileType="pdf" filePath={resume} />
        </div>
        < br />
        <div className={classes.download}>
        <Button  href={resume} target="_blank" download><DownloadIcon></DownloadIcon>  Download </Button>
        </div>
        </div>
    );
}