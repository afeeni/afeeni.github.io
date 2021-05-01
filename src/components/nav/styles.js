import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      position: 'fixed',
      top: 0,
      right: 0,
      left: 0,
      zIndex: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      color: 'pink',
      fontSize: '500px'
    },
    appBar: {
      backgroundColor: 'rgba(0,0,0, 0.5)',
      marginBottom: '10%'
    },
    icon: {
      color: 'pink',
      fontSize: '75px',
    },
    flex: {
      justifyContent: 'space-evenly'
    }
  }));
  

export default useStyles;