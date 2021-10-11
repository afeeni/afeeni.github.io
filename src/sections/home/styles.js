import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    mainDiv: {
      height: '550px',
      marginBottom: '140px',
      backgroundColor: "#efe4d5",
      topMargin: '150px',
      position: 'relative'
    },
    flexItem: {
      backgroundColor: '#d4ebf2',
      height: '100%',
      width: '100%',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    largePhoto: {
      height: '100%',
      width: '100%',
    },
    introSubtext:{
      float: 'bottom',
      textColor: 'black',
      position: 'absolute',
      bottom: '25px',
      width: '100%',
      textAlign: 'center',
      fontSize: '18px'
    },
    title:{
      fontSize: '70px',
      position: 'relative',
      textAlign: 'center',
      fontFamily: 'IBM Plex Serif',
      fontWeight: 'bold',
      width: '100%',
    },
    subtitle: {
      fontSize: '30px',
      textAlign: 'center',
      fontFamily: 'IBM Plex Serif',
      position: 'relative',
      width: '100%',
    },
  }));

  export default useStyles;