import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    nav: {
      flexGrow: 1,
      position: 'fixed',
      top: 0,
      right: 0,
      left: 0,
      zIndex: 1,
    },
    menuButton: {
      // marginRight: theme.spacing(2), // add theme spacing
      color: 'pink',
      fontSize: '500px'
    },
    appBar: {
      marginBottom: '10%',
      backgroundColor: 'rgba(0,0,0, 0.5) !important' // work to remove important tag
    },
    icon: {
      color: 'pink',
      fontSize: '50px !important',
    },
    flex: {
      justifyContent: 'space-evenly',
      
    }
  });
  

export default useStyles;