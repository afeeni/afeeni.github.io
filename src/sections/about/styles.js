import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    headshot: {
      width: '300px',
      height: '400px',
      display: 'block',
      margin: 'auto',
      paddingBottom: '30px'

    },
    text: {
      fontSize: '20px'
    },
    bottomSpace: {
      marginBottom: "400px"
    }
  
  }));

  export default useStyles;