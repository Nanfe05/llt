
import {connect} from 'react-redux';
import {set_notifications} from '../store/actions';
import Snackbar from '@material-ui/core/Snackbar';

function GlobalNotifications ({notification,set_notifications}){
    return(
        <Snackbar
        className={'notification-message'}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={notification ? true : false}
        autoHideDuration={6000}
        onClose={()=>{
            set_notifications(null);
        }}
        message={notification}
      />
    );
}

const mapStateToProps = state =>({
    notification: state.notifications
});

export default connect(mapStateToProps,{set_notifications})(GlobalNotifications);