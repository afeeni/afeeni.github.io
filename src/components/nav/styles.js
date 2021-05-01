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
      color: 'orange',
    },
    title: {
      flexGrow: 1,
      color: 'pink',
      textAlign: 'center',
    },
    appBar: {
      backgroundColor: '#ffffff',
    },
    button: {
      color: 'black'
    }
  }));
  

export default useStyles;