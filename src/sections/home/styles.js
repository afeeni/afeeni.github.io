import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    mainDiv: {
      height: '625px',
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
      marginTop: '22%',
      textAlign: 'center',
      fontFamily: 'IBM Plex Serif',
      fontWeight: 'bold'
    },
    subtitle: {
      fontSize: '30px',
      textAlign: 'center',
      fontFamily: 'IBM Plex Serif'
    },
  }));

  export default useStyles;