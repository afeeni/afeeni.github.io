import { Scrollbars } from 'react-custom-scrollbars';
 
function CustomScrollbars() {

    return (
      <Scrollbars

        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        autoHeight
        autoHeightMin={0}
        autoHeightMax={200}
        thumbMinSize={30}
        universal={true}/>
    );
  }



export default CustomScrollbars;