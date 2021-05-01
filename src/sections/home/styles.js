import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    mainDiv: {
      height: '900px',
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
  }));

  export default useStyles;