import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

    section:{
        padding: '40px 150px 140px',
        background: '#ffd0d6'
    },
    root: {
      width: 400,
      height: 300,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'

    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    typ: {
      fontSize: '12px',
      textAlign: 'center',
    },
    flexItem: {
      height: '100%',
      width: '100%',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
  
  });

  export default useStyles;
