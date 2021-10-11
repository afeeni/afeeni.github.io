import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
      fontSize: '50px',
      textAlign: 'center'
    },
    headshot: {
      width: '300px',
      height: '400px',
      display: 'block',
      margin: 'auto',
      paddingBottom: '30px'

    },
    text: {
      fontSize: '20px'
    }
  
  }));

  export default useStyles;