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
      fontSize: '20px',
      font: 'helvetica',
      marginRight: '50px',
      marginLeft: '50px',
      textAlign:'justify'
    },
    bottomSpace: {
      marginBottom: "400px"
    }
  
  }));

  export default useStyles;